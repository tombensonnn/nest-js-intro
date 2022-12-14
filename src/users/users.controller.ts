import { Controller, Post, Get, Req, Res, Param, Query, ValidationPipe, HttpException, HttpStatus } from "@nestjs/common";
import { Body, UsePipes } from "@nestjs/common/decorators";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { Request, Response } from "express";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    // return [{username: "canuyumz", email: "can@uyumaz.com"}];
    return this.usersService.fetchUsers();
  }

  @Get(":id")
  getUserById(@Param("id", ParseIntPipe) id: number) {
    const user = this.usersService.getUserById(id);
    if (!user) {
      throw new HttpException("user not found", HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  @Post("create")
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.usersService.createUser(createUserDto);
  }
}
