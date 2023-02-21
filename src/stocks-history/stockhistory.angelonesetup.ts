import { Injectable } from '@nestjs/common'
import axios from 'axios'
@Injectable()
export class NseRequest{
    baseUrl:string
    header:any
    static session
    constructor(){
        this.baseUrl = 'https://www.nseindia.com'
        this.header= {
            cookie:{
            }
        }
    }

    async init(){
        if(NseRequest.session){
            return
        }else{
            await this.createSession()
        }
    }

    async createSession(){
        NseRequest.session = await axios.get(this.baseUrl,{timeout:20000})
        this.header.cookie = NseRequest.session.headers['set-cookie'].join(';')
        // console.log(this.header['cookie'])
    }

    getUrl=async(uri:string)=>{
        await this.init()
        const response = await axios.get(uri , {headers : this.header})
        return response.data
    }


}