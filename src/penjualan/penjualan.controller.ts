import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { PenjualanService } from './penjualan.service';
import { CreatePenjualanDto, FindPenjualanDto, PenjualanId } from './dto/create-penjualan.dto';
import { UpdatePenjualanDto } from './dto/update-penjualan.dto';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PenjualanProses } from './penjualan-proses.decorator';
import { JwtGuard } from 'src/auth/jwt.guard';
import { ResponProdukDto } from 'src/produk/dto/create-produk.dto';
import { CreatePenjualanItemDto } from './dto/penjualan-item.dto';
import { CreatePenjualanBayarDto } from './dto/penjualan-bayar.dto';

@ApiTags('Penjualan')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('penjualan')
export class PenjualanController {
  constructor(private readonly penjualanService: PenjualanService) { }

  @Post()
  @ApiBody({ type: CreatePenjualanDto })
  create(@PenjualanProses() createPenjualanDto: CreatePenjualanDto) { // biar otomatis kalkulasi // create(@Body() createPenjualanDto: CreatePenjualanDto) {
    return this.penjualanService.create(createPenjualanDto);
  }


  @Post('item')
  @ApiBody({ type: CreatePenjualanItemDto })
  createItem(createPenjualanItemDto: CreatePenjualanItemDto) { // biar otomatis kalkulasi // create(@Body() createPenjualanDto: CreatePenjualanDto) {
    let example = {
      "jumlah_jual": 1,
      "harga_jual": 2500,
      "potongan": 500,
      "produk": {
        "user": {
          "nama_user": "eki testing",
          "id": 202201020443278,
          "update_at": "2022-01-02T21:11:54.139+07:00",
          "create_at": "2022-01-02T21:11:54.139+07:00"
        },
        "foto": "PD20220102-USR202201020443278-1641132714125.png",
        "harga_jual": 2000,
        "harga_beli": 1500,
        "deskripsi_produk": "TESTING-001-DESC",
        "nama_produk": "TESTING-001-PRODUK",
        "barcode": "TESTING-001",
        "update_at": "2022-01-02T21:11:54.140+07:00",
        "create_at": "2022-01-02T21:11:54.140+07:00",
        "id": 202201021154140
      }
    }

    return this.penjualanService.createItem(createPenjualanItemDto);
  }

  @Post('bayar')
  @ApiBody({ type: CreatePenjualanBayarDto })
  createBayar(createPenjualanBayarDto: CreatePenjualanBayarDto) { // biar otomatis kalkulasi // create(@Body() createPenjualanDto: CreatePenjualanDto) {
    return this.penjualanService.createBayar(createPenjualanBayarDto);
  }

  @Get()
  @ApiOkResponse({ type: ResponProdukDto }) //pagenation
  findAll(@Query() filter: FindPenjualanDto) { //pagenation
    return this.penjualanService.findAll(filter);

    // findAll() {
    //   return this.penjualanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penjualanService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdatePenjualanDto })
  update(@Param('id') id: string, @PenjualanProses() updatePenjualanDto: UpdatePenjualanDto) { //  update(@Param('id') id: string, @Body() updatePenjualanDto: UpdatePenjualanDto) {
    return this.penjualanService.update(+id, updatePenjualanDto);
  }

  @Delete(':id')
  remove(@Param() id: PenjualanId) { //  remove(@Param('id') id: string) {
    return this.penjualanService.remove(id.id);
  }
}
