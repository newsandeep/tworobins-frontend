export class User {
  userId: number;
  name: string;
  companyName: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  token?: string;
  responseCode:number;
  responseMessage:string;
}


export enum Role {
  Admin = 1,
}
