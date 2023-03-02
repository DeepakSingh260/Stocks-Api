import { Controller , Get , Post , Param ,Body } from "@nestjs/common";
import { SignUpProvider } from "./sign-up.provider";

@Controller('sign-up')
export class SignUpController{
    constructor(private signUpProvider:SignUpProvider){}

    @Post('')
    async SignUpSetUp(@Param() param , @Body() body){
        console.log(param , body)
        const response = await this.signUpProvider.setUp(body.uid.toString())
        return 'sign-up get method called'
    }

    @Get('')
    async get(){
        const response = await this.signUpProvider.testDb()
        return response 
    }

}