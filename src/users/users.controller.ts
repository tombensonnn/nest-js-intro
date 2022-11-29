import { Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "src/dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {

  // dependecy injection
  constructor(private readonly usersService: UsersService) {

  }

  @Post('signup')
  signup(){
    return this.usersService.signup();
  }

  @Post('signin')
  signin(){
    return this.usersService.login();
  }
}
