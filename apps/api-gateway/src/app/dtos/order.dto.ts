import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { addUserProduct, buyASellerProductPayload, createProductPayload, getProductPayload } from "../../assets/order";
import { ApiProperty } from "@nestjs/swagger";
import { Empty } from "google/protobuf/empty";

export class createProductDTO implements createProductPayload {

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'manor' })
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  image: string;

}

export class GetProductPayloadDto implements getProductPayload {
  @ApiProperty()
  @IsOptional()
  @IsString()
  productId: string;


  @ApiProperty()
  @IsOptional()
  @IsString()
  title: string;
}


export class AddProductToUserDto implements addUserProduct {
  @ApiProperty()
  @IsNumber()
  sellingPrice: number;

  @ApiProperty()
  productId: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  @IsOptional()
  description?: string;

  @ApiProperty()
  productVisibility: boolean;


}

export class MakeOrderDto implements buyASellerProductPayload {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  userProductId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  fromCurrency: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  toCurrency: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  buyingUserId: string;
}

export class AllProductsDto implements Empty {

}
