import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.config.get('JWT_REFRESH_SECRET'),
      expiresIn: this.config.get('JWT_REFRESH_EXPIRATION'),
    });
    await this.usersService.setRefreshToken(user.id, refreshToken);
    return { accessToken, refreshToken };
  }

  async register(email: string, password: string) {
    return this.usersService.create(email, password);
  }

  async sendResetLink(email: string) {
    const token = Math.random().toString(36).substring(2);
    const expires = new Date(Date.now() + 1000 * 60 * 60); // 1 hour
    await this.usersService.setResetToken(email, token, expires);
    return { token, expires };
  }

  async resetPassword(token: string, newPassword: string) {
    const user = await this.usersService.findByResetToken(token);
    if (!user) throw new UnauthorizedException('Invalid or expired token');
    const hash = await bcrypt.hash(newPassword, 10);
    await this.usersService.updatePassword(user.email, hash);
    await this.usersService.clearResetToken(user.email);
    return { success: true };
  }
}