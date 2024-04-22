import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { randomUUID } from 'crypto';
import { LoginRequest, RegisterRequest } from '../../assets/auth';

export class CreateUserDto implements RegisterRequest {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'sholzy' })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'sholzy@mailinator.com' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;
}

export class LoginUserDto implements LoginRequest {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;
}
