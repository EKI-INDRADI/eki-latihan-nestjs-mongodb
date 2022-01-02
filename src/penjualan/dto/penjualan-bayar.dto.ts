import { ApiHideProperty, ApiProperty, OmitType } from "@nestjs/swagger"
import { IsDate, IsNumber, IsObject, IsOptional, ValidateNested } from "class-validator"
// import { RekeningIdDto } from "src/rekening/dto/create-rekening.dto"
import { UserDto } from "src/user/dto/create-user.dto"


export class PenjualanBayarDto {
    @ApiHideProperty()
    @IsOptional()
    id: number

    @ApiProperty()
    @IsDate()
    tanggal_bayar: Date

    @ApiProperty()
    @IsNumber()
    jumlah_bayar: number

    // @ApiProperty({ type: RekeningIdDto })
    // @IsObject()
    // @ValidateNested()
    // rekening: RekeningIdDto

    @ApiHideProperty()
    @IsObject()
    user: UserDto

}

export class CreatePenjualanBayarDto extends OmitType(PenjualanBayarDto, ['id']) { }