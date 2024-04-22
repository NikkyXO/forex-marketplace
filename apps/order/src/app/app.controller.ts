import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { addUserProduct, buyASellerProductPayload, createProductPayload, getAllUserProductsPayload, getProductPayload, getUserProductPayload } from '../assets/order';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductService } from './services';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productService: ProductService,

  ) {}

  @GrpcMethod('OrderServiceClient', 'createProduct')
  createProduct(data: createProductPayload) {
    return this.productService.createProduct(data);
  }

  @GrpcMethod('OrderServiceClient', 'getProduct')
  getAProduct(data: getProductPayload) {
    return this.productService.getProductById(data);
  }

  @GrpcMethod('OrderServiceClient', 'createUserProduct')
  addToUserProducts(data: addUserProduct) {
    return this.productService.addProductToUser(data);
  }


  @GrpcMethod('OrderServiceClient', 'getUserProduct')
  fetchUserProduct(data: getUserProductPayload) {
    return this.productService.getUserProduct(data);
  }

  fetchUserSellingProduct() {
    //
  }

  @GrpcMethod('OrderServiceClient', 'getAllUserProducts')
  fetchAllUserProducts(data: getAllUserProductsPayload) {
    return this.productService.getAllUserProducts(data);
  }

  @GrpcMethod('OrderServiceClient', 'removeUserProduct')
  removeAUserProduct(data: getUserProductPayload) {
    return this.productService.removeUserProduct(data);
  }

  @GrpcMethod('OrderServiceClient', 'deleteProduct')
  removeProduct(data: getProductPayload) {
    return this.productService.deleteProduct(data);
  }


  @GrpcMethod('OrderServiceClient', 'buyAProduct')
  buySellerProduct(data: buyASellerProductPayload) {
    return this.appService.buyASellerProduct(data);

  }
}
