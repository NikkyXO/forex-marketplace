import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';
import { IsEmail, IsString, MinLength } from 'class-validator';
import {
  loginPayload,
  loginResultData,
  RegisterRequest,
  RegisterResponse,
} from '../../../assets/auth';

export class ConfirmUserResponseDto {
  @ApiProperty({ example: 'user_confirm_success' })
  message: string;
  @ApiProperty({ example: null, nullable: true, type: 'null' })
  data: null;
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}

export class ConfirmUserDto {
  @ApiProperty()
  link: string;
}

export class CreateUserResponseDto implements RegisterResponse {
  @ApiProperty({ example: 'user_create_success' })
  message: string;

  @ApiProperty({ example: null, nullable: true })
  // errors?: { [key: string]: any };
  error: string[];

  status: HttpStatus;

  userId: string;
}

export class CreateUserDto implements RegisterRequest {
  @ApiProperty({
    uniqueItems: true,
    example: 'test1@denrox.com',
  })
  email: string;
  @ApiProperty({
    minLength: 6,
    example: 'test11',
  })
  password: string;

  @ApiProperty({
    minLength: 6,
    example: 'test11',
  })
  username: string;
}

export class CreateUserDto2 {
  @ApiProperty({
    uniqueItems: true,
    example: 'test1@denrox.com',
  })
  email: string;
  @ApiProperty({
    minLength: 6,
    example: 'test11',
  })
  password: string;

  @ApiProperty({
    minLength: 6,
    example: 'test11',
  })
  username: string;
}

export class LoginUserResponseDto implements loginResultData {
  @ApiProperty({ example: 'token_create_success' })
  message: string;
  @ApiProperty({
    example: { token: 'someEncodedToken' },
    nullable: true,
  })
  data: {
    token: string;
  };

  status: HttpStatus;
}

export class LoginUserDto implements loginPayload {
  @ApiProperty({ example: 'test1@denrox.com' })
  email: string;
  @ApiProperty({ example: 'test11' })
  password: string;
}

export class LogoutUserResponseDto implements loginResultData{
  @ApiProperty({ example: 'token_destroy_success' })
  message: string;
  @ApiProperty({ example: null, nullable: true, type: 'null' })
  data: null;
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };

  @ApiProperty({ example: '200' })
  status: number;
}

export class ValidateRequestDto {
  @IsString()
  public readonly token: string;
}
