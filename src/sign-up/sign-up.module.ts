import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SignUpController } from './sign-up.controller';
import { SignUpProvider } from './sign-up.provider';
import { BalanceSchema, UserBalance, UserHolding, UserHoldingSchema } from './sign-up.schema';

@Module({
    controllers:[SignUpController],
    providers:[SignUpProvider , UserBalance , UserHolding],
    imports:[MongooseModule.forFeature([{name:UserBalance.name , schema:BalanceSchema } , {name:UserHolding.name , schema:UserHoldingSchema}])]

})
export class SignUpModule {}
