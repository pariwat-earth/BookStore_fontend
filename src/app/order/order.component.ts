import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  book = new Array;
  order = ['Harry Porter 1','Boy','Big data','Java for student']
  constructor() { }

  ngOnInit(): void {
    this.book = [];
    this.book = [
      {
        name:'User0',
        address:'test',
        order: this.order
      },
      {
        name:'User1',
        address:'test',
        order: this.order
      },
      {
        name:'User2',
        address:'test',
        order: this.order
      },
      {
        name:'User3',
        address:'test',
        order: this.order
      },
      {
        name:'User4',
        address:'test',
        order: this.order
      },
      {
        name:'User5',
        address:'test',
        order: this.order
      },
      {
        name:'User6',
        address:'test',
        order: this.order
      },
    ]
  }

  deleteuser(index: string){
    const numberarr = 0
    for(let i = 0; i<=10;i++){
      if(index == this.book[i].name){
        alert("ยืนยันคำสั่งซื้อ");
        this.book.splice(i,1);
      }
    }
  }
}
