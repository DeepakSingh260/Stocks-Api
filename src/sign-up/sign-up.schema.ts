import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserBalanceDoc = HydratedDocument<UserBalance>
@Schema()
export class UserBalance{
@Prop()
UserUID:string
@Prop()
Balance:number
}
export const BalanceSchema = SchemaFactory.createForClass(UserBalance)

export type UserHoldingDoc = HydratedDocument<UserHolding>
@Schema()
export class UserHolding{
@Prop()
UserUID:string
@Prop()
stocks:[]
}
export const UserHoldingSchema = SchemaFactory.createForClass(UserHolding)
