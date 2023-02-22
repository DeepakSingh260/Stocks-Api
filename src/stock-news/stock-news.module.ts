import { Module } from '@nestjs/common';
import { StockNewsProvider } from './stocks-new.provider';
import { StockNewsController } from './stocks-news.controller';

@Module({

    controllers:[StockNewsController],
    providers:[StockNewsProvider]
})
export class StockNewsModule {}
