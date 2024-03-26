import { IsNumber, IsString } from 'class-validator';

export class UpdateAddressDto {
  @IsString()
  cep: string;
  @IsString()
  logradouro: string;
  @IsString()
  complemento: string;
  @IsString()
  bairro: string;
  @IsString()
  localidade: string;
  @IsString()
  uf: string;
  @IsString()
  gia: string;
  @IsNumber()
  ibge: number;
  @IsNumber()
  ddd: number;
  @IsNumber()
  siafi: number;
}
