import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserProduct } from '../entiities/user-product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientGrpc } from '@nestjs/microservices';
import { Product } from '../entiities/product.entity';
import { addBoughtProductToUserPayload, addUserProduct, createProductPayload, getAllUserProductsPayload, getProductPayload, getUserProductPayload } from '../../assets/order';
import { allProductsDto } from '../dtos/order.dto';

@Injectable()
export class ProductService {
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(UserProduct) private userProduct: Repository<UserProduct>,
    @InjectRepository(Product) private product: Repository<Product>
  ) {}

  async createProduct(data: createProductPayload) {
    const productExists =  await this.product.findOne({
      where: { title: data.title }
    })
    console.log('in controller ', productExists);
    if (!productExists) {
      const newProduct = await this.product.create(data);
      const savedProduct = await this.dataSource.manager.save(newProduct);
      return savedProduct
    }
    return productExists;

  }

  async getProductById({ productId }: getProductPayload) {
    return await this.product.findOne({
      where: { id: productId }
    })
  }

  async getAllProducts(): Promise<allProductsDto>  {
    const products = await this.product.find();
    console.log({ products });
    return {
      products
    }
  }



  async addProductToUser(data : addUserProduct) {
    return await this.dataSource.getRepository(UserProduct).save(data)
    // return  this.userProduct.create({
    //   ...data as any
    // })
  }

  addBoughtProductToUser(data : addBoughtProductToUserPayload) {
    return this.userProduct.create(data)
  }


  async getUserProduct(data: getUserProductPayload) {
    return await this.userProduct.findOne({
      where: {
        ...data
      }
    })
  }

  async getUserProductById(userProductId: string) {
    // const product = await this.userProduct.find({
    //   where: {
    //     id: userProductId
    //   }
    // })
    console.log({userProductId});
    const product1 = await this.dataSource.getMongoRepository(UserProduct).findOneBy({
      where: {
        productId: userProductId.toString()
      }
    })
    const product = await this.userProduct.findOne({
      where: {
        id: userProductId.toString()
      }
    })
    console.log({ product });
    console.log({ product1 });
    return product1;
  }

  async getUserProductByProductId(userProductId: string) {
    return await this.userProduct.findOne({
      where: {
        productId: userProductId
      }
    })
  }

  async getAllUserProducts(data: getAllUserProductsPayload) {
    console.log({ service: data})
    const products = await this.userProduct.find({
      where: {
        ...data
      }
    })
    console.log({ products });
    return {
      products
    }
  }

  async removeUserProduct(data: getUserProductPayload) {
    await this.userProduct.delete(data);
    return {
      message: "product has been successfully removed"
    }

  }

  async deleteProduct(data: getProductPayload) {
    await this.product.delete({ id: data.productId });
    return {
      message: "product has been successfully removed"
    }
  }


}
