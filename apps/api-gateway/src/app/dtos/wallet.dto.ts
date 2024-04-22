import { IsNotEmpty, IsString } from "class-validator";
import { getUserWalletRequest } from "../../assets/wallet";
import { ApiProperty } from "@nestjs/swagger";


export class getUserWalletDto implements getUserWalletRequest {

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '641768iut384f6843' })
  userId: string;

}