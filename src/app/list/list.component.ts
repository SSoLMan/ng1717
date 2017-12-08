import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {EventsService} from "../services/events.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title:string="商品列表";
  listData:Array<Object> = [];
  classData:Array<Object> = [];
  constructor(private proService:ProductService, private eventService:EventsService) { }

  ngOnInit() {
    this.getProductData();
    this.proService.getClassData().then(res=>{
      console.log(res)
      this.classData = res.json()
    });

    console.log(this.eventService.eventEmitter)//全局的事件对象服务，提供的事件触发器
    ///监听，如果有谁触发 事件监听器，提取参数
    this.eventService.eventEmitter.subscribe((params:any)=>{
      console.log("event params:" ,params)
      this.getProductData(params);
    })
  }
  changeTit(tit:string){
    this.title = tit
  }
  getProductData(id?){
    this.proService.getListData(id).then(res=>{
      console.log(res);
      this.listData = res.json().listData
    })
  }
}
