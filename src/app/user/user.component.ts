import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = new Array;

  constructor() { }

  ngOnInit(): void {
    this.user = [];
    this.user = [
      {
        username:'bookstoreAdmin',
        password:'123456789',
        type:'Admin'
      },
      {
        username:'bookstoreUser',
        password:'0123456789',
        type:'User'
      },
      {
        username:'Test1',
        password:'Test1',
        type:'User'
      },
      {
        username:'Test2',
        password:'Test2',
        type:'User'
      },
      {
        username:'Test3',
        password:'Test3',
        type:'User'
      },
      {
        username:'Test4',
        password:'Test4',
        type:'User'
      },
    ];
  }

  deleteuser(index: string){
    const numberarr = 0
    for(let i = 0; i<=10;i++){
      if(index == this.user[i].username){
        this.user.splice(i,1)
      }
    }
  }

}
