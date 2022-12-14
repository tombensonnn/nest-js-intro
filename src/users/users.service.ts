import { Injectable } from "@nestjs/common";
import { CreateUserType } from "../utils/types";

@Injectable()
export class UsersService {
  private users = [{ username: "can", email: "canuyumaz@can.com" }];

  
  createUser(user: CreateUserType) {
    this.users.push(user);
    return;
  }

  fetchUsers() {
    return this.users;
  }

  getUserById(id: number){
    return {id};
  }
}
