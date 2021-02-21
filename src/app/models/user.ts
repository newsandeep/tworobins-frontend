export class User {
  userId: number;
  name: string;
  companyName: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  token?: string;
}


export enum Role {
  Admin = 1,
}
