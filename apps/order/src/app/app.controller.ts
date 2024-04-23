import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { addUserProduct, buyASellerProductPayload, createProductPayload, getAllUserProductsPayload, getProductPayload, getUserProductPayload } from '../assets/order';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductService } from './services';
import { allProductsDto } from './dtos/order.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productService: ProductService,

  ) {}

  @GrpcMethod('OrderServiceClient', 'createProduct')
  async createProduct(data: createProductPayload) {
    return await this.productService.createProduct(data);
  }

  @GrpcMethod('OrderServiceClient', 'getProduct')
  getAProduct(data: getProductPayload) {
    return this.productService.getProductById(data);
  }

  @GrpcMethod('OrderServiceClient', 'createUserProduct')
  addToUserProducts(data: addUserProduct) {
    console.log("in create product ", data)
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
    console.log({ inclient: data})
    return this.productService.getAllUserProducts(data);
  }

  @GrpcMethod('OrderServiceClient', 'removeUserProduct')
  async removeAUserProduct(data: getUserProductPayload) {
    return await this.productService.removeUserProduct(data);
  }

  @GrpcMethod('OrderServiceClient', 'deleteProduct')
  removeProduct(data: getProductPayload) {
    return this.productService.deleteProduct(data);
  }


  @GrpcMethod('OrderServiceClient', 'buyAProduct')
  buySellerProduct(data: buyASellerProductPayload) {
    console.log({ inClient: data})
    return this.appService.buyASellerProduct(data);
  }

  @GrpcMethod('OrderServiceClient', 'getAllProducts')
  async getAllProduct()  {
    const products =  await this.productService.getAllProducts();
    console.log({ productsInClientMethod : products });
    return products
  }
}
