import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listData:Array<Object> = [];
  constructor(private proService:ProductService) { }

  ngOnInit() {
    console.log(this.proService)
    //this.listData =  this.proService.getListData()
    this.proService.getListData().then(res=>{
      console.log(res)
      this.listData = res.json().listData
    })
  }

}
