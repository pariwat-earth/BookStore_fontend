import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from '../book';
import { CartOrder } from '../cart-order';

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements OnInit {
  @Input()
  book!: Book;
  @Output()
  OnSelectBook: EventEmitter<{number_book:number,add_book:number}> = new EventEmitter();

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  //เพิ่มข้อมูลในรถเข็น
  addToCart(namebook: string){
    this.OnSelectBook.emit({number_book:this.book.codebook,add_book:1});
    this._snackBar.open('เพิ่ม ' + namebook + ' ลงในรถเข็นแล้ว','', {duration:500});
  }

  //ดูข้อมูลหนังสือ
  showDatabook(){
    console.log(this.book.codebook);
    this.OnSelectBook.emit({number_book:this.book.codebook,add_book:0});
  }

}
