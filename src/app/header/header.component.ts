import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CartOrder } from '../cart-order';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  NameUser = new Object;

  @Output() OnTap: EventEmitter<{bo:String,book:CartOrder}> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openslidenav(){
    this.OnTap.emit({bo:"true",book:{
      ordername: '',
      price: 0,
      count: 0,
    }});
  }

  add_bookToCart(book: CartOrder){
    this.OnTap.emit({bo:"false",book:{
      ordername: book.ordername,
      price: book.price,
      count: book.count,
    }});
  }
}
