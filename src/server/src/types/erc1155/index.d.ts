export interface Erc1155RequestBody {
  address: string;
  network: string;
  amount?: number;
  image?: File;
  name?: string;
  description?: string;
}
