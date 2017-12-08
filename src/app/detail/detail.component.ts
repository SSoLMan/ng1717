import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:number;
  detailData:Object = {};
  constructor(private router:ActivatedRoute,private proService:ProductService) { }

  ngOnInit() {
    //this.router.snapshot 路由快照
    console.log(this.router,this.router.snapshot);

    this.id = this.router.snapshot.params.id;
    this.proService.getDetailData(this.id).then(res=>{
      console.log(res.json())
      this.detailData = res.json()
    })
    //this.
  }

}
