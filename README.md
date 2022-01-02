<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

##  EKI NOTE :

"sebelumnya terimakasih kepada "Web App Project" Youtube Channel saya tambahkan penjelasan beliau & disini saya tambahkan juga pemahaman typescript saya & beberapa informasi penting dari video tutorial pada comment code" ,

"pentingnya dokumentasi karena disini saya memiliki pengalaman Research & Development tanpa dokumentasi, tanpa portfolio, tanpa bukti nyata adalah 'BULLSHIT' ".

## 1. installation Docker, Mongodb
```bash
install vm alpine + docker
https://github.com/EKI-INDRADI/eki-latihan-vm-alpine-docker-portable

install Docker, Mongodb
https://github.com/EKI-INDRADI/eki-latihan-docker-mongodb (mongodb 5.xx)

mongosh admin -u 'root' -p 'masuk123'
show dbs
use simple_pos
```

## 2. install nodejs & nestjs

```bash
install nodejs   (https://nodejs.org)

npm i -g @nestjs/cli
nest --version
```

## 3. CLI & note

## ==== STAGE 11 = MIGRATION MYSQL TO MONGODB


<details>
  <summary>20211219-0046-MYSQL-TO-MONGODB</summary>

```bash
/046

// ===================== MIGRATION MYSQL TO MONGODB
1. install mongodb database

2. create database simple_pos

3. npm uninstall @nestjs/typeorm typeorm mysql2

4. delete node_modules

5. npm i

6. npm install --save @nestjs/mongoose mongoose

7. rubah .env 

--- before

MYSQL_HOST = '127.0.0.1'
MYSQL_PORT = '3400'
MYSQL_USER = 'root'
MYSQL_PASSWORD = 'masuk123'
MYSQL_DATABASE = 'simple_pos'
JWT_SECRET_KEY= 'eki-secret-key'

--- /before

--- after

MONGODB_HOST=127.0.0.1
MONGODB_PORT=7000
MONGODB_USER=root
MONGODB_PASSWORD=masuk123
MONGODB_DATABASE=simple_pos
JWT_SECRET_KEY=eki-secret-key

--- /after

8. rubah code pada src\user\user.controller.ts
// @ApiBearerAuth()
// @UseGuards(JwtGuard)
@Controller('user')

------------------------

pasangkan  

@ApiBearerAuth()
@UseGuards(JwtGuard)

pada setiap controller src\user\user.controller.ts , kecuali :

@Post()
create(@Body() ....
...
...

untuk keperluan membuat account

10. update src\app.module.ts
11. update src\<resource_name>\dto\*
12. update src\<resource_name>\entities\*
13. update src\<resource_name>\<resource_name>.service.ts

lalu buat pada http://localhost:3000/api-docs/
POST /USER 
{
  "nama_user": "stringst",
  "email": "string@mail.com",
  "username": "stringst",
  "password": "stringst"
}


//=========================== WAJIB REBUILD DIST FILE

delete /dist files

---- build kembali file /dist nya
npm run build
----

//=========================== /WAJIB REBUILD DIST FILE

15. selesai maka seluruh table akan otomatis terbuat, dan langsung dapat digunakan, persis seperti pada MySQL

HASIL : https://github.com/EKI-INDRADI/eki-latihan-nestjs-mongodb

// ===================== MIGRATION MYSQL TO MONGODB

```

</details>


<details>
  <summary>20211219-0046-MYSQL-TO-MONGODB-001</summary>

```bash
/046-001 USER & AUTH (AUTO GENERATE & AUTO SWAGGER & AUTO VALIDASI)

update src\user\*
update src\app.module.ts

NOTE : migrasi perlahan karena depedency yang digunakan sedikit berbeda TypeORM != Mongoose

```

</details>

<details>
  <summary>20211228-0046-MYSQL-TO-MONGODB-002</summary>


```bash
// AUTO GENERATE ARROW FUNCTION MONGOOSE

    // =================== MONGOOSE PROGRESSIVE FRAMEWORK
    @Prop({
        type: Number,
        default: () =>  
            Number(Date.now()) // karena berupa arrow function maka Date.now() dibaca kembali ketika ada data masuk
    })
    id1: Number

    @Prop({
        type: Number,
        default:Number(Date.now()) // Date.now() dibaca ketika backend running diawal value akan selalu sama
    })
    id2: Number
 // =================== /MONGOOSE PROGRESSIVE FRAMEWORK
```
</details>

<details>
  <summary>20211228-0046-MYSQL-TO-MONGODB-003</summary>


```bash
// update custom validator IsUnique for Mongoose Version 
// (sekaligus contoh inject connection mongoose)
// berikut perbedaan dari IsUnique validator TypeORM Version MySql / PostgreSql

update src\main.ts

useContainer(app.select(AppModule), { fallbackOnErrors: true });  

// masalah ini cukup lama menemukannya
// ternyata harus menggunakan useContainer pada main.ts
// bertujuan agar dapat menggunakan depedency / mongoose connection / service / etc
// pada pada custom validator  

update src\app.module.ts (enable isUnique)

update src\user\dto\create-user.dto.ts (update code)

update src\etc\validator\unique-validator.ts (update code)

// version 1
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

// version 2
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/entities/user.entity';
import { Model, Schema } from 'mongoose';

// version 3
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

note untuk version 3 perlu update src\user\user.service.ts

export class UniqueValidator implements ValidatorConstraintInterface {
  ...
  ...

    constructor(
      // version 1
      @InjectConnection() private MongoDbConnection: Connection,

      // version 2
      // @InjectModel(User.name) private userRepo: Model<User>,

      // version 3
      // private userService: UserService
    ) { }
    
  ...
  ...
}


async validate(value: any, args: ValidationArguments) {
  ...
  ...

    //version 1 (menggunakan service)
    check = await this.userService.manualQuery('findOne', findCondition)

    //version 2 (menggunakan model repository)
    check = await this.userRepo.findOne(findCondition);

    //version 3 (menggunakan mongo conection langsung)
    check = await this.MongoDbConnection.model(args.constraints[0]).findOne(findCondition)

  ...
  ...
}

hasil :


{
  "statusCode": 400,
  "message": [
    "email string5@mail.com sudah digunakan",
    "username stringst5 sudah digunakan"
  ],
  "error": "Bad Request"
}
     
reference : 
https://stackoverflow.com/questions/60062318/how-to-inject-service-to-validator-constraint-interface-in-nestjs-using-class-va

https://docs.nestjs.com/techniques/mongodb

https://mongoosejs.com/docs/api.html#Connection

```
</details>


<details>
  <summary>20211228-0046-MYSQL-TO-MONGODB-004</summary>

```bash
// update custom validator IsExist for Mongoose Version 
// (sekaligus contoh inject connection mongoose)
// berikut perbedaan dari IsExist validator TypeORM Version MySql / PostgreSql

update src\etc\validator\exist-validator.ts

...
...
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';


export class ExistValidator implements ValidatorConstraintInterface {
    constructor(
        @InjectConnection() private MongoDbConnection: Connection,
    ) { }

    async validate(value: any, args: ValidationArguments) {
        let findCondition = { [args.constraints[1]]: args.value }
        let check: any = null
        check = await this.MongoDbConnection.model(args.constraints[0]).findOne(findCondition)
        
        if (check) return true
        return false
    }
...
...

hasil : 
{
"statusCode": 400,
"message": [
  "id 202112283300602 tidak ditemukan" << contoh IsExists
  ],
  "error": "Bad Request"
}

```

</details>


<details>
  <summary>20211229-0046-MYSQL-TO-MONGODB-005</summary>

```bash
// update modular pagenation / pagenator (auto injection) MongoDb (mongoose)
// parameter bisa menggunakan skip-limit atau page-limit keduanya support,
// karena ada beberapa frontend yang menggunakan konsep page dan limit , 
// ada juga yang masih menggunakan skip dan limit, 
// namun saya rekomendasikan sebaiknya menggunakan page karena implementasi di frontend lebih mudah
//
// dan ini sekaligus auto validation schema swagger + custom example dan description swagger nya
//
// (sekaligus contoh inject connection mongoose menggunakan function agar lebih modular)
// berikut contoh perbedaan dari autogenerate pagenator / pagenation dari MySql / PostgreSql (TypeORM)


update src\etc\dto\page-dto.ts
update src\etc\service\page\*
update src\etc\service\page\page.service.ts


contoh implementasi pada get user:
update src\user\dto\create-user.dto.ts
update src\user\user.controller.ts
update src\user\user.service.ts


---------contoh swagger pada parameternya (dapat dicustom)
{
  "page": "1 (number) , jangan gunakan page ketika menggunakan skip",
  "skip": "0 (number) , jangan gunakan skip ketika menggunakan page",
  "limit": 10,
  "sort": {
    "create_at": -1
  },
  "projection": {
    "_id": 0,
    "password": 0,
    "__v": 0
  },
  "id": 202112295441296,
  "nama_user": "",
  "email": "",
  "username": "ing"
}
---------/contoh swagger pada parameternya (dapat dicustom)

---------contoh menggunakan page-limit
request = 
{
  "page": 1,
  "limit": 5,
  "sort": {
    "create_at": -1
  },
  "projection": {
    "_id": 0,
    "password": 0,
    "__v": 0
  },
  "nama_user": "",
  "email": "",
  "username": "ing"
}

respose =
{
  "total": 10,
  "page": 1,
  "pages": 2,
  "data": [
    {
      "username": "ekitesting3",
      "email": "ekitesting3@mail.com",
      "nama_user": "ekitesting3",
      "update_at": "2021-12-29T11:51:38.361Z",
      "create_at": "2021-12-29T11:51:38.361Z",
      "id": 202112295138361
    },
    {
      "username": "ekitesting2",
      "email": "ekitesting2@mail.com",
      "nama_user": "ekitesting2",
      "update_at": "2021-12-29T11:51:31.725Z",
      "create_at": "2021-12-29T11:51:31.725Z",
      "id": 202112295131725
    },
    {
      "username": "ekitesting1",
      "email": "ekitesting1@mail.com",
      "nama_user": "ekitesting1",
      "update_at": "2021-12-29T11:51:23.965Z",
      "create_at": "2021-12-29T11:51:23.965Z",
      "id": 202112295123965
    },
    {
      "username": "ekitesting",
      "email": "ekitesting@mail.com",
      "nama_user": "ekitesting",
      "update_at": "2021-12-29T11:51:15.864Z",
      "create_at": "2021-12-29T11:51:15.864Z",
      "id": 202112295115864
    },
    {
      "username": "stringst",
      "email": "string@mail.com",
      "nama_user": "stringst",
      "update_at": "2021-12-29T11:50:59.039Z",
      "create_at": "2021-12-29T11:50:59.040Z",
      "id": 202112295059040
    }
  ]
}
---------/contoh menggunakan page-limit


---------contoh menggunakan skip-limit
request = 
{
  "skip": 5,
  "limit": 5,
  "sort": {
    "create_at": -1
  },
  "projection": {
    "_id": 0,
    "password": 0,
    "__v": 0
  },
  "nama_user": "",
  "email": "",
  "username": "ing"
}

respose =
{
  "total": 10,
  "page": 2,
  "pages": 2,
  "data": [
    {
      "username": "ekitesting10",
      "email": "ekitesting10@mail.com",
      "nama_user": "ekitesting10",
      "update_at": "2021-12-29T11:52:10.538Z",
      "create_at": "2021-12-29T11:52:10.538Z",
      "id": 202112295210538
    },
    {
      "username": "ekitesting7",
      "email": "ekitesting7@mail.com",
      "nama_user": "ekitesting7",
      "update_at": "2021-12-29T11:52:01.003Z",
      "create_at": "2021-12-29T11:52:01.003Z",
      "id": 20211229520103
    },
    {
      "username": "ekitesting6",
      "email": "ekitesting6@mail.com",
      "nama_user": "ekitesting6",
      "update_at": "2021-12-29T11:51:55.063Z",
      "create_at": "2021-12-29T11:51:55.063Z",
      "id": 202112295155063
    },
    {
      "username": "ekitesting5",
      "email": "ekitesting5@mail.com",
      "nama_user": "ekitesting5",
      "update_at": "2021-12-29T11:51:49.276Z",
      "create_at": "2021-12-29T11:51:49.276Z",
      "id": 202112295149276
    },
    {
      "username": "ekitesting4",
      "email": "ekitesting4@mail.com",
      "nama_user": "ekitesting4",
      "update_at": "2021-12-29T11:51:43.486Z",
      "create_at": "2021-12-29T11:51:43.486Z",
      "id": 202112295143486
    }
  ]
}
---------/contoh menggunakan skip-limit
```


reference : https://docs.nestjs.com/openapi/types-and-parameters
</details>


<details>
  <summary>20211230-0046-MYSQL-TO-MONGODB-006</summary>

```bash

update produk (sudah di migrasi menggunakan Mongoose dan
fungsi sama persis dengan TypeORM)

update src\produk\entities\produk.entity.ts

update src\produk\produk.module.ts

update src\produk\dto\create-produk.dto.ts

update src\produk\dto\update-produk.dto.ts

update src\produk\dto\produk-manual-query.dto.ts

update src\produk\produk.service.ts

update src\produk\produk.controller.ts

update src\app.module.ts

update src\etc\decorator\inject-user.decorator.ts

update src\etc\dto\page-dto.ts

```
</details>


<details>
  <summary>20220102-0046-MYSQL-TO-MONGODB-007</summary>

```bash

update konsumen & rekening (sudah di migrasi menggunakan Mongoose dan
fungsi sama persis dengan TypeORM)

update src\konsumen\*  [done]
update src\app.module.ts [done]

update src\rekening\*  [done]
update src\app.module.ts  [done]

update src\penjualan\*  [inprogress] // perlu check auto schema relation
update src\penjualan\*bayar*  [inprogress] // perlu check auto schema relation
update src\penjualan\*item*  [inprogress] // perlu check auto schema relation
update src\app.module.ts [inprogress] // perlu check auto schema relation



```
</details>

## ==== / STAGE 11 = MIGRATION MYSQL TO MONGODB



mohon maaf lama update, karena tidak memiliki banyak waktu karena saya bekerja pada salah 1 perusahaan startup dengan waktu kerja 11-12 jam per hari

semoga dokumentasi ini bermanfaat cukup liat setiap branch nya, akan langsung paham (sudah dibuat komentar code untuk di pahami juga)

end video  04:24:41 [pagenation rekening done]

stage 8 - update manual raw query SQL

stage 9 - migrasi MySql to PostgreSql

stage 10 - migrasi express adapter nestjs to fastify adapter nestjs

stage 11 - migrasi MySql (TypeORM) to Mongodb (Moongose) [INPROGRESS]

 
## REFERENSI :

```bash
https://nestjs.com/

https://docs.nestjs.com/techniques/database

https://docs.nestjs.com/techniques/mongodb

https://tkssharma.com/nestjs-with-typeORM-mongoose-and-mysql-for-api-development/

https://stackoverflow.com/questions/53646042/how-to-inject-model-if-the-model-is-in-the-root-module-only

https://dev.to/carlomigueldy/building-a-restful-api-with-nestjs-and-mongodb-mongoose-2165

https://stackoverflow.com/questions/60062318/how-to-inject-service-to-validator-constraint-interface-in-nestjs-using-class-va

https://mongoosejs.com/docs/api.html#Connection


https://github.com/EKI-INDRADI/eki-latihan-vm-alpine-docker-portable

https://github.com/EKI-INDRADI/eki-latihan-docker-phpmyadmin-mariadb
https://github.com/EKI-INDRADI/eki-latihan-nestjs-mysql
https://github.com/EKI-INDRADI/eki-latihan-nestjs-fastify-mysql

https://github.com/EKI-INDRADI/eki-latihan-docker-postgresql
https://github.com/EKI-INDRADI/eki-latihan-nestjs-postgresql
https://github.com/EKI-INDRADI/eki-latihan-nestjs-fastify-postgresql 

https://github.com/EKI-INDRADI/eki-latihan-docker-mongodb
https://github.com/EKI-INDRADI/eki-latihan-nestjs-mongodb (INPROGRESS)
https://github.com/EKI-INDRADI/eki-latihan-nestjs-fastify-mongodb (WAITING LIST)

```

## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #STILL_ONE_DIGIT
