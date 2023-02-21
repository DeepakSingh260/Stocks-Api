import { Module } from '@nestjs/common';
import { StockHistoryProvider } from './stock-history.provider';
import { StockHistoryController } from './stocks-history.controller';

@Module({
    controllers:[StockHistoryController],
    providers:[StockHistoryProvider]
})
export class StocksHistoryModule {}
