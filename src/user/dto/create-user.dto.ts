import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator"
import { User } from "../entities/user.entity"
import { IsUnique } from "src/etc/validator/unique-validator"
import { IsExist } from "src/etc/validator/exist-validator"
import { OmitType, PickType } from "@nestjs/swagger"
import { ApiProperty } from "@nestjs/swagger"
export class UserDto {
    @ApiProperty()
    @IsOptional()
    @IsExist([User.name, 'id'])
    id?: number

    @ApiProperty({ required: true })
    @IsString()
    @MaxLength(64)
    @MinLength(8)
    @IsNotEmpty()
    nama_user: string

    @IsEmail()
    @IsUnique([User.name, 'email'])
    @MaxLength(32)
    @MinLength(6)
    @IsNotEmpty()
    email: string

    @IsString()
    @MaxLength(32)
    @MinLength(8)
    @IsNotEmpty()
    @IsUnique([User.name, 'username']) // sama aja @IsUnique(['User', 'username'])
    username: string

    @IsString()
    @MaxLength(32)
    @MinLength(8)
    @IsNotEmpty()
    password: string

}

export class CreateUserDto extends OmitType(UserDto, ['id']) { }

export class UserIdDto extends PickType(UserDto, ['id']) { }

export class UserManualQueryDto {
    @ApiProperty()
    @IsOptional()
    variant?: string

    @ApiProperty()
    @IsOptional()
    condition?: any
}
