import { Injectable } from '@nestjs/common';
import { AddressesRepository } from '../repositories/addresses.repository';
import { UpdateAddressDto } from '../dtos/update-address.dto';
import { CreateAddressDto } from '../dtos/create-address.dto';
import { Address } from '../types/address.type';

@Injectable()
export class AddressesService {
  constructor(private addressesRepository: AddressesRepository) {}

  public findAll(): Promise<Array<Address>> {
    return this.addressesRepository.findAll();
  }

  public findOne(_id: string): Promise<Address> {
    return this.addressesRepository.findOne(_id);
  }

  public async create(addressDto: CreateAddressDto): Promise<Address> {
    const addressId = await this.addressesRepository.create(addressDto);
    return this.addressesRepository.findOne(addressId);
  }

  public async update(
    _id: string,
    addressDto: UpdateAddressDto,
  ): Promise<Address> {
    await this.addressesRepository.update(_id, addressDto);
    return this.addressesRepository.findOne(_id);
  }

  public delete(_id: string): Promise<void> {
    return this.addressesRepository.delete(_id);
  }
}
