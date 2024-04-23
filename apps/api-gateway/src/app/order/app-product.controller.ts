import { Controller, Get, Post, Body, UseGuards, Patch, Delete, Query } from '@nestjs/common';

import { AppAuthGuard } from '../guard/app-jwt-guard';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GRPCOrderService } from './app-order.service';
import { AddProductToUserDto, AllProductsDto, createProductDTO, GetProductPayloadDto } from '../dtos/order.dto';
import { addUserProduct, getUserProductPayload } from '../../assets/order';

@ApiTags('product')
@ApiBearerAuth()
// @UseGuards(AppAuthGuard)
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
  @ApiQuery({ name: 'productId', type: String, required: false })
  @ApiQuery({ name: 'title', type: String, required: false })
  @Get()
  getProduct(@Query('title') title: string, @Query('productId') productId: string) {
    return this.productService.getProduct({productId, title})
  }

  @ApiOperation({
    summary: 'Adds a product to a list of user owned products',
  })
  @Post('user')
  addUserProduct(@Body() data: AddProductToUserDto) {
    return this.productService.addProductToAuser(data)
  }

  @ApiOperation({
    summary: 'Gets a specific user owned product',
  })
  @ApiQuery({ name: 'productId', type: String, required: true })
  @ApiQuery({ name: 'userId', type: String, required:true })
  @Get('user')
  getAUserProduct(@Query('userId') userId: string, @Query('productId') productId: string) {
    return this.productService. getAUserProduct({userId, productId})
  }

  @ApiOperation({
    summary: 'Gets a list of all user owned products',
  })
  @ApiQuery({ name: 'userId', type: String, required:true })
  @Get('user/all')
  getAllUserProducts(@Query('userId') userId: string) {
    return this.productService.fetchAllUserProducts({userId})
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

  @ApiOperation({
    summary: 'gets all product records',
  })
  @ApiQuery({
    name: 'data',
    required: false,
    description:
      'Empty data content ',
  })
  @Get('all')
  fetchAllProducts(@Query('data') data: AllProductsDto) {
    return this.productService.getAllProduct(data)
  }
}
