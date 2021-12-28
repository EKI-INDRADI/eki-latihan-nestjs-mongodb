import { Injectable } from '@nestjs/common';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
// import { getConnection } from 'typeorm';


@ValidatorConstraint({ async: true }) // karena validasi buatan sendiri, ValidatorConstraint diset asynchronous, agar erornya diproses sebelum printah simpan dieksekusi

@Injectable()

export class ExistValidator implements ValidatorConstraintInterface {
    async validate(value: any, args: ValidationArguments) {

        let find = { [args.constraints[1]]: args.value }

        console.log('args.constraints[1]')
        console.log(args.constraints[1])
        console.log('args.constraints[0]')
        console.log(args.constraints[0])
        // // example   find = { email : admin@gmail.com }

        // let check = await getConnection().getRepository(args.constraints[0]).findOne(find)


        let check = true
        if (check) return true

        return false
    }

    defaultMessage(args: ValidationArguments) {
        // args.property  = nama object  , args.value = value object
        return args.property + ' ' + args.value + ' tidak ditemukan'
    }

}

export function IsExist(option: any, validationOption?: ValidationOptions) {
    return function (object: any, propertyName: string) {
        registerDecorator({ // ikutin aja gw juga kurang paham >.<
            name: 'IsExist', // nama yang akan digunakan nanti pada DTO
            target: object.constructor,
            propertyName: propertyName,
            constraints: option,
            options: validationOption, // diambil dari class validator
            validator: ExistValidator, // diambil dari class name
            async: true
        })
    }
}

