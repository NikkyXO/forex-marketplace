import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { addUserProduct, buyASellerProductPayload, createProductPayload, getAllUserProductsPayload, getProductPayload, getUserProductPayload, OrderServiceClient } from '../../assets/order';

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


  createProduct(data: createProductPayload) {
    return this.orderServiceClient.createProduct(data);
  }

  getProduct(data: getProductPayload) {
    return this.orderServiceClient.getProduct(data);
  }

  addProductToAuser(data: addUserProduct) {
    return this.orderServiceClient.createUserProduct(data);
  }

  getAUserProduct(data: getUserProductPayload) {
    return this.orderServiceClient.getUserProduct(data);
  }

  removeUserProduct(data: getUserProductPayload) {
    return this.orderServiceClient.removeUserProduct(data);
  }

  removeProduct(data: getProductPayload) {
    return this.orderServiceClient.deleteProduct(data);
  }

  fetchAllUserProducts(data: getAllUserProductsPayload) {
    return this.orderServiceClient.getAllUserProducts(data);
  }

  buyAProduct(data: buyASellerProductPayload) {
    return this.orderServiceClient.buyAProduct(data);
  }
}
