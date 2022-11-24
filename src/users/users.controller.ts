import { Body, Controller, Delete, Get, Param, Post, Query, Redirect } from "@nestjs/common";
import { CreateUserDto } from "src/dto/create-user.dto";

@Controller("users")
export class UsersController {
  @Get("/findall")
  findAll(): string {
    return "all users";
  }

  @Post("/register")
  register(): string {
    return "this is register route";
  }

  @Get("docs")
  @Redirect("https://docs.nestjs.com", 302)
  getDocs(@Query("version") version) {
    if (version && version == 5) {
      return { url: "https://docs.nestjs.com/v5/" };
    }
  }

  @Get(":id")
  findUser(@Param() params): string {
    return `This method returns ${params.id} user`;
  }

  @Post("/addUser")
  async create(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }

  @Delete('/:id')
  remove(@Param('id') id: string){
    return `This method removes #${id} user.`
  }
}
