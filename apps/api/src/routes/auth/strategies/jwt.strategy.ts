import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../users/users.service';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(config: ConfigService, private usersService: UsersService) {
    super({
      jwtFromRequest: (req: Request) => {
        if (req && req.cookies && req.cookies.accessToken) {
          return req.cookies.accessToken;
        }
        return null;
      },
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_ACCESS_SECRET') || '',
    });
  }

  async validate(payload: any) {
    return this.usersService.getById(payload.sub);
  }
}
