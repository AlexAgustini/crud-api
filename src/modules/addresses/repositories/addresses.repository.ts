import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Address } from '../types/address.type';
import { DATABASE_CONNECTION_TOKEN } from 'src/modules/database/database.module';
import { Collection, Db, Filter, ObjectId } from 'mongodb';
import { CreateAddressDto } from '../dtos/create-address.dto';
import { UpdateAddressDto } from '../dtos/update-address.dto';
import { CustomHttpException } from 'src/common/exceptions/exceptions/custom-http.exception';
import { ErrorCodesEnum } from 'src/common/exceptions/enums/error-codes.enum';

@Injectable()
export class AddressesRepository {
  private addressesCollection: Collection<Address>;

  constructor(@Inject(DATABASE_CONNECTION_TOKEN) db: Db) {
    this.addressesCollection = db.collection<Address>('addresses');
  }

  public async findAll(): Promise<Array<Address>> {
    return await this.addressesCollection.find().toArray();
  }

  public async findOne(_id: string): Promise<Address> {
    if (!ObjectId.isValid(_id)) {
      throw new CustomHttpException(
        ErrorCodesEnum.INVALID_ID,
        HttpStatus.NOT_FOUND,
      );
    }
    const query: Filter<any> = { _id: new ObjectId(_id) };

    return await this.addressesCollection.findOne(query);
  }

  public async create(address: CreateAddressDto): Promise<string> {
    const creationResult = await this.addressesCollection.insertOne({
      ...address,
      createdAt: new Date(),
    });

    return creationResult.insertedId.toString();
  }

  public async update(_id: string, address: UpdateAddressDto): Promise<string> {
    if (!ObjectId.isValid(_id)) {
      throw new CustomHttpException(
        ErrorCodesEnum.INVALID_ID,
        HttpStatus.NOT_FOUND,
      );
    }
    const query: Filter<any> = { _id: new ObjectId(_id) };

    const updateResult = await this.addressesCollection.updateOne(query, {
      $set: { ...address, updatedAt: new Date() },
    });

    if (updateResult.matchedCount == 0) {
      throw new CustomHttpException(
        ErrorCodesEnum.REGISTER_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    }

    return _id;
  }

  public async delete(_id: string): Promise<void> {
    if (!ObjectId.isValid(_id)) {
      throw new CustomHttpException(
        ErrorCodesEnum.INVALID_ID,
        HttpStatus.NOT_FOUND,
      );
    }
    const query: Filter<any> = { _id: new ObjectId(_id) };

    const deleteResult = await this.addressesCollection.deleteOne(query);

    if (deleteResult.deletedCount == 0) {
      throw new CustomHttpException(
        ErrorCodesEnum.REGISTER_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
