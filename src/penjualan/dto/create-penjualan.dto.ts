import { ApiHideProperty, ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsArray, IsDate, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator"
import { PageRequestDto, PageResponseDto } from "src/etc/dto/page-dto"
import { IsExist } from "src/etc/validator/exist-validator"
import { IsUnique } from "src/etc/validator/unique-validator"
// import { KonsumenId } from "src/konsumen/dto/create-Konsumen.dto"
import { UserDto, UserDtoRelation, UserIdDto } from "src/user/dto/create-user.dto"
import { Penjualan } from "../entities/penjualan.entity"
import { PenjualanBayarDto } from "./penjualan-bayar.dto"
import { PenjualanItemDto } from "./penjualan-item.dto"

export class PenjualanDto {
    @ApiProperty() //swagger
    @IsExist([Penjualan, 'id'])
    @IsNumber()
    id: number

    @ApiProperty()
    @IsString()
    @IsUnique([Penjualan, 'no_faktur'])
    no_faktur: string

    @ApiProperty()
    @IsDate()
    tanggal: Date

    @ApiHideProperty()
    @IsNumber()
    total_transaksi: number

    @ApiHideProperty()
    @IsNumber()
    total_potongan: number

    @ApiHideProperty()
    @IsNumber()
    total_bayar: number

    // @ApiProperty({ type: KonsumenId })
    // @ValidateNested() 
    // @IsObject()
    // konsumen: KonsumenId 

    // @ApiProperty()
    // @IsObject()
    // konsumen: Konsumen

    @ApiProperty({ type: [PenjualanItemDto] })
    @IsArray()
    @ValidateNested({ each: true }) //validasi array (each object)
    @Type(() => PenjualanItemDto)
    item: PenjualanItemDto[]

    @ApiProperty({ type: [PenjualanBayarDto] })
    @IsArray()
    @ValidateNested({ each: true })  //validasi array (each object)
    @Type(() => PenjualanBayarDto)
    bayar: PenjualanBayarDto[]

    @ApiHideProperty()
    @IsObject()
    user: UserDtoRelation //    user: UserDto 

}


export class CreatePenjualanDto extends OmitType(PenjualanDto, ['id']) { }
export class PenjualanId extends PickType(PenjualanDto, ['id']) { }

export class FindPenjualanDto extends PageRequestDto {
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    no_faktur: string
}


export class ResponsePenjualanDto extends PageResponseDto {
    @ApiProperty({ type: [PenjualanDto] })
    data: PenjualanDto[]
}
