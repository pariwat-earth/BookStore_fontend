import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartOrder } from '../cart-order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data:any
  @Input()
  Order!:CartOrder[];
  static Order: any;

  @Output()
  On_Order: EventEmitter<number> = new EventEmitter();

  constructor(private route:ActivatedRoute) {
   }

  ngOnInit(): void {
  }

  deleteuser(index:string){
    for(let i = 0; i<=10;i++){
      if(index == this.Order[i].ordername){
        this.Order.splice(i,1);
      }
    }
  }
  order(){
    if(this.Order != []){
      alert('สั่งซื้อสำเร็จ');
      this.On_Order.emit(1);
    }else{

    }
  }
}
