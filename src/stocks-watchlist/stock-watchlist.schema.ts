import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AllStocksDoc = HydratedDocument<PriceTick>;
@Schema()
export class PriceTick{
    @Prop()
    symbol: String;
    @Prop()
    open: number;
    @Prop()
    dayHigh: number;
    @Prop()
    dayLow: number;
    @Prop()
    lastPrice: number;
    @Prop()
    previousClose: number;
    @Prop()
    change: String;
    @Prop()
    pChange: String;
    @Prop()
    totalTradedVolume: number;

    @Prop()
    totalTradedValue: number;
    @Prop()
    lastUpdateTime: Date;
    @Prop()
    yearHigh: number;
    @Prop()
    ffmc: number;
    @Prop()
    yearLow: number;
    @Prop()
    nearWKH: number;
    @Prop()
    nearWKL: number;
    @Prop()
    perChange365d: String;
    @Prop()
    perChange30d: String;
    @Prop({type:{}})
    meta:{};

  }

  export const AllStocksSchema = SchemaFactory.createForClass(PriceTick )