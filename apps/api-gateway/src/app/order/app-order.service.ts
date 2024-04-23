import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { addUserProduct, buyASellerProductPayload, createProductPayload, getAllUserProductsPayload, getProductPayload, getUserProductPayload, OrderServiceClient } from '../../assets/order';
import { Empty } from 'google/protobuf/empty';

@Injectable()
export class GRPCOrderService implements OnModuleInit {
  private orderServiceClient: OrderServiceClient;

  constructor(
    @Inject('order') private orderGrpc: ClientGrpc,
  ) {}


  public onModuleInit() {
      this.orderServiceClient =
      this.orderGrpc.getService<OrderServiceClient>("OrderServiceClient");
  }


  async createProduct(data: createProductPayload) {
    console.log(" abou to call client: ", data)
    return await this.orderServiceClient.createProduct(data);
  }

  getProduct(data: getProductPayload) {
    return this.orderServiceClient.getProduct(data);
  }

  getAllProduct(data: Empty) {
    return this.orderServiceClient.getAllProducts(data);
  }

  addProductToAuser(data: addUserProduct) {
    return this.orderServiceClient.createUserProduct(data);
  }

  getAUserProduct(data: getUserProductPayload) {
    return this.orderServiceClient.getUserProduct(data);
  }

  async removeUserProduct(data: getUserProductPayload) {
    return await this.orderServiceClient.removeUserProduct(data);
  }

  removeProduct(data: getProductPayload) {
    return this.orderServiceClient.deleteProduct(data);
  }

  fetchAllUserProducts(data: getAllUserProductsPayload) {
    console.log({ clientCall: data})
    return this.orderServiceClient.getAllUserProducts(data);
  }

  buyAProduct(data: buyASellerProductPayload) {
    console.log({ clientCall: data})
    return this.orderServiceClient.buyAProduct(data);
  }
}
