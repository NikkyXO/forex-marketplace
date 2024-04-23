import { Controller, Get, Post, Body, UseGuards, Query, Patch } from '@nestjs/common';

import { AppAuthGuard } from '../guard/app-jwt-guard';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GRPCWalletService } from './app-wallet.service';
import { fundWalletDto, getUserWalletDto } from '../dtos/wallet.dto';
import { lastValueFrom, Observable } from 'rxjs';

@ApiTags('wallet')
@ApiBearerAuth()
@Controller('wallet')
@UseGuards(AppAuthGuard)
export class GRPCWalletController {
  constructor(private readonly walletService: GRPCWalletService) {}

  @ApiOperation({
    summary: 'Gets a user wallet',
  })
  @ApiQuery({
    name: 'userId',
    required: false,
    description:
      'Unique identifier for a user ',
  })
  @Get('user')
  async getUserWallet( @Query('userId') userId: string ) {
    const wallet = await this.walletService.getUserWallet({ userId})
    console.log({ walResult:  wallet });
    return wallet;
  }

  @ApiOperation({
    summary: 'fund a user wallet',
  })
  @Patch('user')
  async fundUserWallet( @Body() data: fundWalletDto ) {
    const wallet = await this.walletService.fundUserWallet(data);
    console.log({ walResult:  wallet });
    return wallet;
  }
}

// 6626a265c343fad4b9f6e7b1"
