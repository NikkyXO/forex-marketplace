import { Controller, Get } from '@nestjs/common';
import {
  CreateUserDto,
  CreateUserDto2,
  CreateUserResponseDto,
  LoginUserDto,
  LoginUserResponseDto,
  ValidateRequestDto,
} from './auth/dtos/user.dto';
import { ValidateResponse } from '../assets/auth';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService) {}

  @GrpcMethod('AuthServiceClient', 'register')
  private async register(payload: CreateUserDto): Promise<CreateUserResponseDto> {
    return await this.appService.register(payload);
  }

  private createUser(payload: CreateUserDto2) {
    return { message: 'Hello there'};
  }


  @GrpcMethod('AuthServiceClient', 'login')
  private async login(payload: LoginUserDto): Promise<LoginUserResponseDto> {
    return await this.appService.login(payload);
  }

  @GrpcMethod('AuthServiceClient', 'validate')
  private async validate(
    payload: ValidateRequestDto
  ): Promise<ValidateResponse> {
    return await this.appService.validate(payload);
  }
}
