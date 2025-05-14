import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { GoogleStrategy } from './strategies/google.strategy';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cs: ConfigService) => ({
        secret: cs.get('JWT_ACCESS_SECRET'),
        signOptions: { expiresIn: cs.get('JWT_ACCESS_EXPIRATION') },
      }),
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, GoogleStrategy],
  controllers: [AuthController],
})
export class AuthModule {}