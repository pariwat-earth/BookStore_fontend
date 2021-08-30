import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { CartOrder } from '../cart-order';

export interface Section {
  icons: string;
  name: string;
}
@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {
  order!:CartOrder[];
  opened = false;
  chk = false;
  openC = false;
  folders: Section[] = [
    {
      icons: 'home',
      name: 'Home',
    },
    {
      icons:'shopping_cart',
      name:'Cart'
    },
    {
      icons:'perm_identity',
      name:'About us'
    }
  ];
  data:any={}

  constructor(private route:ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.order=[];
    this.route.params.subscribe(prams=>{
      this.data = prams
      console.log(this.data);
    })
  }

  navopen(tt: any) {
    if(tt.bo != "false"){
      if (this.opened == false) {
        this.opened = true;
        this.chk = true;
      } else {
        this.opened = false;
        this.chk = false;
      }
    }else  if(tt.bo = "false"){
      this.order.push(tt.book);
      console.log(this.order);
    }
  }

  chkopened() {
    this.opened == false ? this.opened = true : this.opened = true;
  }

  chkclose() {
    this.chk == true ? this.opened = true : this.opened = false;
  }
  setshowCart(){
    if(this.openC != true){
      this.openC = true;
    }else{
      this.openC = false;
    }
  }
  cleararray(){
    this.order=[];
  }



}
