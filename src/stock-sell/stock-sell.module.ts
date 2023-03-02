import { Module } from '@nestjs/common';
import { StockSellController } from './stock-sell.controller';

@Module({
    controllers:[StockSellController]
})
export class StockSellModule {}
