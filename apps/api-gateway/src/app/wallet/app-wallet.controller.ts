import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';

import { AppAuthGuard } from '../guard/app-jwt-guard';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GRPCWalletService } from './app-wallet.service';
import { getUserWalletDto } from '../dtos/wallet.dto';

@ApiTags('wallet')
@ApiBearerAuth()
@Controller('wallet')
@UseGuards(AppAuthGuard)
export class GRPCWalletController {
  constructor(private readonly walletService: GRPCWalletService) {}

  @ApiOperation({
    summary: 'Gets a user wallet',
  })
  @Get('user')
  getUserWallet(@Body() data: getUserWalletDto ) {
    return this.walletService.getUserWallet(data);
  }
}
