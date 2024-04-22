import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserProduct } from '../entiities/user-product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientGrpc } from '@nestjs/microservices';
import { Product } from '../entiities/product.entity';
import { addBoughtProductToUserPayload, addUserProduct, createProductPayload, getAllUserProductsPayload, getProductPayload, getUserProductPayload } from '../../assets/order';

@Injectable()
export class ProductService {
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(UserProduct) private userProduct: Repository<UserProduct>,
    @InjectRepository(UserProduct) private product: Repository<Product>
  ) {}

  async createProduct(data: createProductPayload) {
    return this.product.create({
      ...data as any,
    })
  }

  async getProductById({ productId }: getProductPayload) {
    return await this.product.findOne({
      where: { id: productId }
    })
  }

  addProductToUser(data : addUserProduct) {
    return  this.userProduct.create({
      ...data as any
    })
  }

  addBoughtProductToUser(data : addBoughtProductToUserPayload) {
    return  this.userProduct.create({
      ...data as any
    })
  }


  async getUserProduct(data: getUserProductPayload) {
    return await this.userProduct.findOne({
      where: {
        ...data
      }
    })
  }

  async getUserProductById(userProductId: string) {
    return await this.userProduct.findOne({
      where: {
        id: userProductId
      }
    })
  }

  async getAllUserProducts(data: getAllUserProductsPayload) {
    return await this.userProduct.findOne({
      where: {
        ...data
      }
    })
  }

  async removeUserProduct(data: getUserProductPayload) {
    this.userProduct.delete(data)

  }

  async deleteProduct(data: getProductPayload) {
    this.product.delete({ id: data.productId });
  }
}
