import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GRPCAuthService } from './app-auth.service';
import { CreateUserDto, LoginUserDto } from '../dtos/auth.dto';
import { AppAuthGuard } from '../guard/app-jwt-guard';

// @ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class GRPCAuthController {
  constructor(private readonly authService: GRPCAuthService) {}

  @ApiOperation({
    summary: 'Registers a user',
  })
  @Post('register')
  async registerUser(@Body() data: CreateUserDto) {
    return await this.authService.registerUser(data);
  }

  @ApiOperation({
    summary: 'logins a user and returns access token',
  })
  @Post('login')
  loginUser(@Body() data: LoginUserDto) {
    return this.authService.loginUser(data);
  }

  @UseGuards(AppAuthGuard)
  @Get('test')
  HelloUser() {
    return { message: 'Hello World' };
  }
}
