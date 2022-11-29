import { Injectable } from "@nestjs/common";


@Injectable()
export class UsersService {
    login(){
        return { msg: "hello i am login action" };
    }

    signup(){
        return { msg: "hello i am register action" };
    }
}