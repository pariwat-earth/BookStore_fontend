import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from '../book';

@Component({
  selector: 'app-bookmenage',
  templateUrl: './bookmenage.component.html',
  styleUrls: ['./bookmenage.component.css']
})
export class BookmenageComponent implements OnInit {
  books!: Book[];
  selecbook!: Book;
  test: number = 0;
  work: number = 1;
  form!: FormGroup;

  @Input()
  book_save !: Book;
  imgURL: any;
  private selectedFile: any;


  constructor(private httpClient: HttpClient,
              private fb: FormBuilder,
              private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      codebook: '',
      bookname: '',
      writer: '',
      price: '',
      stork: '',
      image:''
    });
  }

  ngOnInit(): void {
    this.LoadBook();
  }

  public onFileChanged(event: any) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.imgURL = reader.result;
      this.form.value.image = this.imgURL;
    };

  }

  //แปลงภาพเป็นString

  //ดึงหนังสือจากHeroku
  LoadBook() {
    this.httpClient
      .get('https://ctf-bookstoreback-end.herokuapp.com/')
      .subscribe(result => {
        this.books = result as Book[];
      });
  }

  //ดึงทีละเล่ม
  async selectionbook(booknumber: any) {
    this.test = booknumber;
    await this.httpClient
      .get('https://ctf-bookstoreback-end.herokuapp.com/book/' + booknumber)
      .subscribe(book => {
        this.selecbook = book as unknown as Book;
      })
      this.work = 0;
  }

  chooseimagr() {
    alert('work');
  }

  //ส่งข้อมูลหหนังสือขึ้นHeroku
  searddata() {
    const addBook = this.form.value;
        this.httpClient.post('https://ctf-bookstoreback-end.herokuapp.com/upload', addBook)
          .subscribe(book => {
            this.form.reset();
            this.LoadBook();
            this._snackBar.open('เพิ่มข้อมูลสำเร็จ', '',{duration:500});
          });
  }

  delete() {
    alert("delete");
    this.LoadBook();
  }
  deleteitem(booknumber: any){
    this.httpClient.delete('https://ctf-bookstoreback-end.herokuapp.com/delete/'+ booknumber)
    .subscribe(result => {
      this.work = 1;
      this.LoadBook();
    });
  }

  setwork(){
    this.work = 1;
  }
}
