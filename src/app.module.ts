import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksWatchlistModule } from './stocks-watchlist/stocks-watchlist.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [StocksWatchlistModule , MongooseModule.forRoot("mongodb+srv://test:test@cluster0.2xnfc.mongodb.net/?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
