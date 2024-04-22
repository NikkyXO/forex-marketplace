import { IsNotEmpty, IsString } from "class-validator";
import { buyASellerProductPayload, createProductPayload, getProductPayload } from "../../assets/order";
import { ApiProperty } from "@nestjs/swagger";

export class createProductDTO implements createProductPayload {

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'manor' })
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  image: string;

}

export class GetProductPayloadDto implements getProductPayload {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productId: string;
}


export class MakeOrderDto implements buyASellerProductPayload {

  @ApiProperty()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  userProductId: string;

  @ApiProperty()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  fromCurrency: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  toCurrency: string;
}
