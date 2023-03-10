import { Injectable } from "@nestjs/common";
import axios from 'axios'
@Injectable()
export class StockNewsProvider{
    baseUrl:string
    constructor(){
        this.baseUrl =  'https://newsapi.org/v2/everything';

    }
    async getNews(){
        const response = await axios.get(this.baseUrl ,{params:{
            apiKey : '74b6116ed004423bae8f334bb5031186',
            q : 'Stock'
        }})
        return {data: response.data}
    }
    async getNewsForStock(stock:string){
        const response = await axios.get(this.baseUrl ,{params:{
            apiKey : '74b6116ed004423bae8f334bb5031186',
            q : stock
        }})
        return {data: response.data}
    }
    
}