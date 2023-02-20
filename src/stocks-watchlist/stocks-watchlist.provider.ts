import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PriceTick , AllStocksDoc } from "./stock-watchlist.schema";

@Injectable()
export class StocksWatchlistProvider{
    constructor(@InjectModel(PriceTick.name) private allStocksModel:Model<AllStocksDoc>){}
    async getAllStockList():Promise<PriceTick[]>{
        return await this.allStocksModel.find({}).exec()
    }

}