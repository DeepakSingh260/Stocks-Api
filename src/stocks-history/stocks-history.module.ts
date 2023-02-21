import { Module } from '@nestjs/common';
import { StockHistoryProvider } from './stock-history.provider';
import { NseRequest } from './stockhistory.angelonesetup';
import { StockHistoryController } from './stocks-history.controller';

@Module({
    controllers:[StockHistoryController],
    providers:[StockHistoryProvider ,NseRequest ]
})
export class StocksHistoryModule {}
