import { Module } from '@nestjs/common';
import { StockBuyController } from './stock-buy.controller';

@Module({
    controllers:[StockBuyController],
    providers:[]
})
export class StockBuyModule {}
