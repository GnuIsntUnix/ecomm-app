import {ProductItem} from "./product-item";

export class User {
  firstName: string;
  lastName: string;
  gender: string;
  username: string;
  phone: string;
  password: string;
  birthDate: Date;


  constructor(firstName: string, lastName: string, gender: string, email: string, phone: string, password: string, birthDate: Date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.username = email;
    this.phone = phone;
    this.password = password;
    this.birthDate = birthDate;
  }
}


export class UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;


  constructor(users: User[], total: number, skip: number, limit: number) {
    this.users = users;
    this.total = total;
    this.skip = skip;
    this.limit = limit;
  }
}
