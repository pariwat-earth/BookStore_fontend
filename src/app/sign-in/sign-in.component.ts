import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form!: FormGroup;

  data = {}

  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      userForm : ['bookstoreUser', Validators.required],
      passForm : ['0123456789', Validators.required],
      conPassForm : ['0123456789', Validators.required],
      email : ['pariwat.paiwong@gmail.com',[Validators.email, Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  openDialog() {
    if(this.form.controls['passForm'].value != this.form.controls['conPassForm'].value){
      alert('รหัสผ่านไม่ตรงกัน')
    }else{
      alert('ลงทะเบียนสำเร็จ');
      this.data = 'bookstoreUser'
      this.router.navigate(['/Home', { username: this.data, type: 'user' }]);
    }
  }

}
