import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksWatchlistModule } from './stocks-watchlist/stocks-watchlist.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StocksHistoryModule } from './stocks-history/stocks-history.module';
import { StockNewsModule } from './stock-news/stock-news.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { StockBuyModule } from './stock-buy/stock-buy.module';
import { StockSellModule } from './stock-sell/stock-sell.module';


@Module({
  imports: [StocksWatchlistModule,StocksHistoryModule,StockNewsModule , MongooseModule.forRoot("mongodb+srv://test:test@cluster0.2xnfc.mongodb.net/?retryWrites=true&w=majority"), StocksHistoryModule, StockNewsModule, SignUpModule, StockBuyModule, StockSellModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
