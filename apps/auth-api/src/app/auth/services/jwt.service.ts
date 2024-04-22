import { Injectable } from '@nestjs/common';
import { JwtService as Jwt } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from '../entities/auth.entity';
import  bcrypt from 'bcryptjs';

@Injectable()
export class JwtService {
  constructor(
    private readonly jwt: Jwt,
    @InjectRepository(Auth) private tokenRepo: Repository<Auth>
  ) {}

  public async validateUser(decoded: any): Promise<Auth> {
    return this.tokenRepo.findOne(decoded.id);
  }

  public async generateToken(userId: string): Promise<any> {
    await this.deleteTokenForUserId(userId);
    const token = this.jwt.sign(
      {
        userId,
      },
      {
        expiresIn: 30 * 24 * 60 * 60,
      }
    );

    await this.tokenRepo.save({
      user_id: userId,
      token,
    });
    return token;
  }

  public async deleteTokenForUserId(userId: string) {
    return await this.tokenRepo.delete({
      userId: userId,
    });
  }

  public async decodeToken(token: string) {
    const tokenModel = await this.tokenRepo.findOne({
      where: { token },
    });
    let result = null;

    if (tokenModel) {
      try {
        const tokenData = this.jwt.decode(tokenModel.token) as {
          exp: number;
          userId: any;
        };
        if (!tokenData || tokenData.exp <= Math.floor(+new Date() / 1000)) {
          result = null;
        } else {
          result = {
            userId: tokenData.userId,
          };
        }
      } catch (e) {
        result = null;
      }
    }

    return result && result.userId;
  }

  public isPasswordValid(password: string, userPassword: string): boolean {
    return bcrypt.compareSync(password, userPassword);
  }

  public encodePassword(password: string): string {
    const salt: string = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(password, salt);
  }

  public async verify(token: string): Promise<any> {
    try {
      return this.jwt.verify(token);
    } catch (err) {
      console.log(err);
    }
  }
}
