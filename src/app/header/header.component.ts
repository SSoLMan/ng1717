import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() tit:string;
  constructor() { }
  ngOnChanges(){
    //当父组件传递的值改变时触发     Input（输入值改变时 触发）
    console.log("ngOnChanges")
  }
  ngOnInit() {
    //init 系列的生命周期函数只会触发一次，
    //Check 系列生命 周期函数，数据改变就会触发 Check=》ContentChecked =》 ViewChecked
    console.log("ngOnInit")
  }
  ngDoCheck(){
    console.log("ngDoCheck")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }
}
