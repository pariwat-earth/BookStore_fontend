import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book';
import { CartOrder } from '../cart-order';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  books!: Book[];
  one_book!: Book;
  @Input()
  codebook: number = 0;
  @Output()
  On_add_Book: EventEmitter<CartOrder> = new EventEmitter();

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient
      .get('https://ctf-bookstoreback-end.herokuapp.com/')
      .subscribe(result => {
        this.books = result as Book[];
      })
  }

  showbook(booknumber: any) {
    if (booknumber.add_book == 0) {
      this.codebook = booknumber.number_book;
      this.httpClient
        .get('https://ctf-bookstoreback-end.herokuapp.com/book/' + booknumber.number_book)
        .subscribe(book => {
          this.one_book = book as unknown as Book;
        })
    } else
    this.httpClient
      .get('https://ctf-bookstoreback-end.herokuapp.com/book/' + booknumber.number_book)
      .subscribe(book => {
        this.one_book = book as unknown as Book;
        this.On_add_Book.emit({
          ordername: this.one_book.bookname,
          price: this.one_book.price,
          count: 1,
        });
      })

  }

  passbook(booknumber: any) {

  }
  //set 0 to codebook
  setZero() {
    this.codebook = 0;
  }

}
