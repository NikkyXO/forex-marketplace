import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AppAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    console.log({ token });
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verify(token, {
        secret: 'dev',
        // secret: `${this.configService.get<string>('JWT_SECRET')}`,
      });

      request.userId = payload.userId;

    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    if (request.headers['bearer']) {
      return request.headers['bearer'] as string;
    } else if (request.headers.authorization) {
      return request.headers.authorization.split(" ")[1]

    }
  }
}

export interface IExpressRequest extends Request {
  userId?: string;
  email?: string;
  deviceId?: string;
}

