import { Controller, Get, Post, Body, UseGuards, Patch, Delete } from '@nestjs/common';

import { AppAuthGuard } from '../guard/app-jwt-guard';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GRPCOrderService } from './app-order.service';
import { createProductDTO, GetProductPayloadDto } from '../dtos/order.dto';
import { addUserProduct, getUserProductPayload } from '../../assets/order';

@ApiTags('product')
@ApiBearerAuth()
@UseGuards(AppAuthGuard)
@Controller('product')
export class GRPCProductController {
  constructor(private readonly productService: GRPCOrderService) {}


  @Post()
  @ApiOperation({
    summary: 'Creates a  product Record',
  })
  createProduct(@Body() data: createProductDTO) {
    return this.productService.createProduct(data)
  }


  @ApiOperation({
    summary: 'Gets a  product Record',
  })
  @Get()
  getProduct(@Body() data: GetProductPayloadDto) {
    return this.productService.getProduct(data)
  }

  @ApiOperation({
    summary: 'Adds a product to a list of user owned products',
  })
  @Post('user')
  addUserProduct(@Body() data: addUserProduct) {
    return this.productService.addProductToAuser(data)
  }

  @ApiOperation({
    summary: 'Gets a specific user owned product',
  })
  @Get('user')
  getAUserProduct(@Body() data: getUserProductPayload) {
    return this.productService. getAUserProduct(data)
  }

  @ApiOperation({
    summary: 'Remove a product from a list of user owned products',
  })
  @Patch('user')
  removeProductFromUser(@Body() data: getUserProductPayload) {
    return this.productService.removeUserProduct(data)
  }

  @ApiOperation({
    summary: 'removes a  product Record',
  })
  @Patch()
  deleteProduct(@Body() data: GetProductPayloadDto) {
    return this.productService.removeProduct(data)
  }
}
