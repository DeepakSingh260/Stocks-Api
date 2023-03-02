import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserBalance, UserBalanceDoc, UserHolding, UserHoldingDoc } from "./sign-up.schema";
import { Model } from "mongoose";

@Injectable()
export class SignUpProvider{
    constructor(@InjectModel(UserBalance.name) private userBalanceMethod:Model<UserBalanceDoc> , @InjectModel(UserHolding.name) private userHoldingMethod:Model<UserHoldingDoc> ){}

    async setUp(uid:string){
        if((await this.userBalanceMethod.find({UserUID:uid})).length<1){
            const response = this.userBalanceMethod.create({UserUID:uid , Balance:1000000})
        }
        if((await this.userHoldingMethod.find({UserUID:uid})).length<1){
            const response2 = this.userHoldingMethod.create({UserUID:uid ,stocks:{} })
        }
        return "response"
    }
    async testDb(){
        const response = await this.userBalanceMethod.find({}).exec()
        const response2 = await this.userHoldingMethod.find({}).exec()
        return [...response , ...response2] 
    }
}