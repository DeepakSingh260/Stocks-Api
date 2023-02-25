import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksWatchlistModule } from './stocks-watchlist/stocks-watchlist.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StocksHistoryModule } from './stocks-history/stocks-history.module';
import { StockNewsModule } from './stock-news/stock-news.module';


@Module({
  imports: [StocksWatchlistModule,StocksHistoryModule,StockNewsModule , MongooseModule.forRoot("mongodb+srv://test:test@cluster0.2xnfc.mongodb.net/?retryWrites=true&w=majority"), StocksHistoryModule, StockNewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
