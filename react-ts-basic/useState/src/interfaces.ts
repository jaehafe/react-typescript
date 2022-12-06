type Address = {
  street: string;
  number: number;
  zip: string;
};

export type User = {
  name: string;
  age: number;
  country: string;
  address: Address;
  admin: boolean;
};
