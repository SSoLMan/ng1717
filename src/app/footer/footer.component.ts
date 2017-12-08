import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() changeTit= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeHeaderTit(){
    //触发 父组件传递的changeTit事件
    this.changeTit.emit("新的 header")
  }

}
