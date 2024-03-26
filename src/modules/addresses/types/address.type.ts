export type Address = {
  id?: string;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  gia: string;
  ibge: number;
  ddd: number;
  siafi: number;
  createdAt: Date;
  updatedAt?: Date;
};
