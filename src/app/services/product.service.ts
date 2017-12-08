import { Injectable } from '@angular/core';
import {Http} from "@angular/http";


@Injectable()
export class ProductService {

  constructor(private http:Http) { }
  getListData(){
    console.log(this.http);
    //获取的结果不是promise 对象，需要转换
    return this.http.get("http://localhost:8000/api/product/getListData").toPromise()
  }
  getDetailData(id:number){
    console.log(this.http)
    return this.http.get("http://localhost:8000/api/product/getDetailData?pid="+id).toPromise()
  }
}
