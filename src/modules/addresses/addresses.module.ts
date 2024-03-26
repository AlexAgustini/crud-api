import { Module } from '@nestjs/common';
import { AddressesController } from './controllers/addresses.controller';
import { AddressesRepository } from './repositories/addresses.repository';
import { AddressesService } from './services/addresses.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AddressesController],
  providers: [AddressesRepository, AddressesService],
})
export class AddressesModule {}
