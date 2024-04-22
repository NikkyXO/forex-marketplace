import { BadRequestException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from './services';
import {
  CreateUserDto,
  LoginUserDto,
  LoginUserResponseDto,
  ValidateRequestDto,
} from './auth';
import { RegisterResponse, ValidateResponse } from '../assets/auth';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth, User } from './entitties';
import { DataSource, Repository } from 'typeorm';


@Injectable()
export class AppService {
  @InjectRepository(Auth)
  private readonly authRepository: Repository<Auth>;

  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  @Inject(JwtService)
  private readonly jwtService: JwtService;

  constructor(
    private readonly dataSource: DataSource,
  ) {}

  public async register(data: CreateUserDto): Promise<RegisterResponse> {
    const { email, password } = data;
    const user = await this.userRepository.findOne({ where: { email } });

    if (user) {
      return {
        status: HttpStatus.CONFLICT,
        message: 'User already exist, please log in',
        userId: '',
        error: ['E-Mail already exists'],
      };
    }

    data.password = this.jwtService.encodePassword(password);
    console.log({ pword: data.password });
    const newUser = this.userRepository.create(data);
    const savedUser = await this.dataSource.manager.save(newUser);
    console.log({ savedUser });

    return {
      status: HttpStatus.CREATED,
      userId: savedUser.id,
      error: null,
      message: 'User created successfully',
    };
  }

  public async login(data: LoginUserDto): Promise<LoginUserResponseDto> {
    const { email, password } = data;
    const user = await this.userRepository.findOne({ where: { email } });

    if (user) {
      const isPasswordValid: boolean = this.jwtService.isPasswordValid(
        password,
        user.password
      );

      if (!isPasswordValid) {
        return {
          status: HttpStatus.NOT_FOUND,
          data: null,
          message: 'Password wrong',
        };
      }

      const token: string = await this.jwtService.generateToken(user.id);
      const auth = await this.authRepository.create({
        ...data,
        token,
        userId: user.id,
      });

      console.log({ auth });
      return { data: { token }, status: HttpStatus.OK, message: '' };
    }
    return {
      status: HttpStatus.NOT_FOUND,
      data: null,
      message: 'User not found',
    };
  }

  public async validate({
    token,
  }: ValidateRequestDto): Promise<ValidateResponse> {
    const decoded: Auth = await this.jwtService.verify(token);
    console.log({ decoded });

    if (!decoded) {
      return {
        status: HttpStatus.FORBIDDEN,
        error: ['Token is invalid'],
        userId: null,
      };
    }

    const auth: Auth = await this.jwtService.validateUser(decoded);
    console.log({ auth });

    if (!auth) {
      return {
        status: HttpStatus.CONFLICT,
        error: ['User not found'],
        userId: null,
      };
    }

    return {
      status: HttpStatus.OK,
      error: null,
      userId: decoded.userId,
    };
  }
}
