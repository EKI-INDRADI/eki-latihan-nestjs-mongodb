import { ApiHideProperty, ApiProperty, OmitType } from "@nestjs/swagger"
import { IsNumber, IsObject, IsOptional, Min, ValidateNested } from "class-validator"
import { ProdukDto, ProdukIdDto } from "src/produk/dto/create-produk.dto"
import { CreateUserDto, UserDto, UserIdDto } from "src/user/dto/create-user.dto"

export class PenjualanItemDto {
    @ApiHideProperty()
    @IsOptional()
    id: number
    
    @ApiProperty()
    @Min(1)
    @IsNumber()
    jumlah_jual: number
    
    @ApiProperty()
    @IsNumber()
    harga_jual: number
    
    @ApiProperty()
    @IsNumber()
    potongan: number
    
    @ApiProperty({type:ProdukDto})
    @IsObject()
    @ValidateNested()
    produk: ProdukDto
    
    @ApiHideProperty()
    @IsObject()
    user: UserDto
}


export class CreatePenjualanItemDto extends OmitType(PenjualanItemDto, ['id']) { }