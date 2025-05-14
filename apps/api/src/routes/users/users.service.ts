import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(email: string, password: string) {
    return this.prisma.user.create({ data: { email, password } });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async setRefreshToken(id: number, token: string) {
    return this.prisma.user.update({ where: { id }, data: { refreshToken: token } });
  }

  async getById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async setResetToken(email: string, token: string, expires: Date) {
    return this.prisma.user.update({
      where: { email },
      data: { resetToken: token, resetTokenExpires: expires },
    });
  }

  async findByResetToken(token: string) {
    const now = new Date();
    return this.prisma.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpires: { gte: now },
      },
    });
  }

  async updatePassword(email: string, hash: string) {
    return this.prisma.user.update({
      where: { email },
      data: { password: hash },
    });
  }

  async clearResetToken(email: string) {
    return this.prisma.user.update({
      where: { email },
      data: { resetToken: null, resetTokenExpires: null },
    });
  }
}