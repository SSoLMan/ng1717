import { Injectable } from '@angular/core';
import {Http} from "@angular/http";


@Injectable()
export class ProductService {
  listData:Array<Object>=[];
  constructor(private http:Http) { }
  getListData(id){
    console.log(this.http);
    //获取的结果不是promise 对象，需要转换
    return this.http.get("http://localhost:8000/api/product/getListData?classID="+id).toPromise()
  }
  getDetailData(id:number){
    console.log(this.http)
    return this.http.get("http://localhost:8000/api/product/getDetailData?pid="+id).toPromise()
  }
  getClassData(){
    return this.http.get("http://localhost:8000/api/class/getListData").toPromise()
  }
}
