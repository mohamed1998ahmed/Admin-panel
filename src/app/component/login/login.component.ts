import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports:[FormsModule],
  templateUrl: './login.component.html',
})
export class loginComponent {

  userObj = {
    email: '',
    password: ''
  }

router = inject(Router)
  onLogin() {
    if(this.userObj.email == 'admin@google.com' && this.userObj.password == '1234')
      {
        alert('Login Successfully');
        localStorage.setItem('loginuser', this.userObj.email)
        this.router.navigateByUrl('admin');
    }else{
      alert('Email or Password is incorrect');
    }

  }
}
