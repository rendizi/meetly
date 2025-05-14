import {
  Controller, Post, Body, Req, Res, UseGuards, Get, Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import { Response, Request } from 'express';
import { ApiTags, ApiOperation, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Register user' })
  @ApiBody({ schema: { properties: { email: { type: 'string' }, password: { type: 'string' } } } })
  @Post('register')
  async register(@Body() dto: { email: string; password: string }, @Res() res: Response) {
    try {
      const hash = await bcrypt.hash(dto.password, 10);
      await this.authService.register(dto.email, hash);
      return res.status(201).send({ success: true });
    } catch (err) {
      return res.status(400).send({ success: false, message: err.message });
    }
  }

  @ApiOperation({ summary: 'Login user' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: any, @Res() res: Response) {
    try {
      const tokens = await this.authService.login(req.user);
      res.cookie('accessToken', tokens.accessToken, { httpOnly: true });
      res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true });
      return res.send({ success: true });
    } catch (err) {
      return res.status(401).send({ success: false, message: err.message });
    }
  }

  @ApiOperation({ summary: 'Google OAuth' })
  @Get('auth/google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @ApiOperation({ summary: 'Google OAuth callback' })
  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: any, @Res() res: Response) {
    try {
      const tokens = await this.authService.login(req.user);
      res.cookie('accessToken', tokens.accessToken, { httpOnly: true });
      res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true });
      return res.redirect('/me');
    } catch (err) {
      return res.status(401).send({ success: false, message: err.message });
    }
  }

  @ApiOperation({ summary: 'Get current user' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('me')
  async me(@Req() req: any, @Res() res: Response) {
    try {
      return res.send(req.user);
    } catch (err) {
      return res.status(401).send({ success: false, message: err.message });
    }
  }

  @ApiOperation({ summary: 'Refresh tokens' })
  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  async refresh(@Req() req: any, @Res() res: Response) {
    try {
      const tokens = await this.authService.login(req.user);
      res.cookie('accessToken', tokens.accessToken, { httpOnly: true });
      res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true });
      return res.send({ success: true });
    } catch (err) {
      return res.status(401).send({ success: false, message: err.message });
    }
  }

  @ApiOperation({ summary: 'Send password reset link' })
  @Post('send-reset-link')
  async sendReset(@Body() body: { email: string }, @Res() res: Response) {
    try {
      const { token } = await this.authService.sendResetLink(body.email);
      const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:8000'}/reset-password/${token}`;
      await resend.emails.send({
        from: 'onboarding@noreply.sandeapp.kz',
        to: body.email,
        subject: 'Password Reset',
        html: `<p>Click <a href="${resetUrl}">here</a> to reset your password.</p>`
      });
      return res.send({ success: true });
    } catch (err) {
      return res.status(400).send({ success: false, message: err.message });
    }
  }

  @ApiOperation({ summary: 'Reset password' })
  @Post('reset-password/:token')
  async resetPassword(@Param('token') token: string, @Body() body: { password: string }, @Res() res: Response) {
    try {
      await this.authService.resetPassword(token, body.password);
      return res.send({ success: true });
    } catch (err) {
      return res.status(400).send({ success: false, message: err.message });
    }
  }
}