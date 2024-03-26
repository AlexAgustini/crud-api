import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  cep: string;
  @IsString()
  logradouro: string;

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
  @IsString()
  @IsOptional()
  complemento: string;
  @IsNumber()
  @IsOptional()
  ddd: number;
  @IsNumber()
  @IsOptional()
  siafi: number;
}
