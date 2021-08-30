import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm = new FormControl('bookstoreAdmin',Validators.required);
  passForm = new FormControl('123456789',Validators.required);
  type = new Number('1');

  data ={}

  constructor(private router : Router,) { }

  ngOnInit(): void {
  }

  login(){
    if(this.userForm.invalid || this.passForm.invalid){
      return ;
    }else{
      if(this.userForm.value =='bookstoreAdmin' && this.passForm.value == '123456789'){
        //const username = this.userForm.value;
        //const password = this.passForm.value;
        this.data = this.userForm.value;
        this.router.navigate(['/Home',{username:this.data,type:'admin'}]);
        // alert("username "+username+" password "+password);
      }else{
        if(this.userForm.value =='bookstoreUser' && this.passForm.value == '0123456789'){
          this.data = this.userForm.value;
          this.router.navigate(['/Home',{username:this.data,type:'user'}]);
          // alert("username "+username+" password "+password);
        }
      }
    }

  }


}
