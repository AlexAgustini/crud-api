import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAddressDto } from '../dtos/create-address.dto';
import { UpdateAddressDto } from '../dtos/update-address.dto';
import { Address } from '../types/address.type';
import { AddressesService } from '../services/addresses.service';

@Controller('addresses')
export class AddressesController {
  constructor(private addressesService: AddressesService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  public findAll(): Promise<Array<Address>> {
    return this.addressesService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  public findOne(@Param('id') _id: string): Promise<Address> {
    return this.addressesService.findOne(_id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  public async create(
    @Body() createAddressDto: CreateAddressDto,
  ): Promise<Address> {
    return await this.addressesService.create(createAddressDto);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  public async update(
    @Param('id') _id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    return await this.addressesService.update(_id, updateAddressDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  public delete(@Param('id') _id: string): Promise<void> {
    return this.addressesService.delete(_id);
  }
}
