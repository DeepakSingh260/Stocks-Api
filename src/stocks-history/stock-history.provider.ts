import { Injectable } from "@nestjs/common";
import { NseRequest } from "./stockhistory.angelonesetup";
import {AxiosResponse} from 'axios';
import { Stream } from "stream";
import * as moment from "moment";
import * as csv from 'csv-parser'
import { json } from "express";
@Injectable()
export class StockHistoryProvider{

    constructor(private nseRequest:NseRequest){}

    parseCSVUrl=async(url:string)=>{
        const parseData:{}[] = [];
        return new Promise(async (resolve , reject)=>{
            try{
                await this.nseRequest.init();
                const response:any = await this.nseRequest.getUrl(url);
                // console.log('response' , response)
                const csvStream = new Stream.Readable();
                csvStream.push(response, 'utf-8');
                csvStream.push(null);
                csvStream
                .pipe(csv())
                .on('data' , (data)=>{
                    parseData.push(data);})
                .on('end',()=>{
                    // console.log(parseData)
                    resolve(parseData);
                })

            }catch(e){
                reject(e);
            }
        })
    }   

    async priceHistory(stockSymbol:string){
        await this.nseRequest.init()
        const from = moment().subtract(2,'year').subtract(1,'day').format('DD-MM-YYYY');
        const to = moment().format('DD-MM-YYYY');
        const url = `https://www.nseindia.com/api/historical/cm/equity?symbol=${stockSymbol}&series=[%22EQ%22]&from=${from}&to=${to}&csv=true`;
        let parseData:{} = {}
        try{
            parseData = await this.parseCSVUrl(url)
        }catch(e){
            console.log(e)
        }

        return {
            data:parseData
        }
    }
}