import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AllStocksSchema , PriceTick  } from './stock-watchlist.schema';
import { WatchlistRouter } from './stocks-watchlist.controller';
import { StocksWatchlistProvider } from './stocks-watchlist.provider';

@Module({
    controllers:[WatchlistRouter],
    providers:[StocksWatchlistProvider],
    imports:[MongooseModule.forFeature([{name:PriceTick.name , schema:AllStocksSchema }])]
})
export class StocksWatchlistModule {}
