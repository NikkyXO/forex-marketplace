import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';

import { AppAuthGuard, IExpressRequest } from '../guard/app-jwt-guard';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GRPCOrderService } from './app-order.service';
import { MakeOrderDto } from '../dtos/order.dto';

@ApiTags('order')
@ApiBearerAuth()
@Controller('order')
// @UseGuards(AppAuthGuard)
export class GRPCOrderController {
  constructor(private readonly orderService: GRPCOrderService) {}

  @ApiOperation({
    summary: 'Buys a seller product, and creates an order',
  })
  @Post('create')
  BuyProduct(@Req() req: IExpressRequest, @Body() data: MakeOrderDto) {
    const buyingUserId = req.userId;
    data.buyingUserId = data.buyingUserId || buyingUserId
    console.log('in gateway  controller ', data);
    return this.orderService.buyAProduct(data)
  }
}
