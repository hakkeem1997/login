import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginservice';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: any;
  pasword: any;
  confirmPassword: any;
  msg: any;
  passworderror: any;


  constructor(
    private api: LoginService
  ) {
    this.loadData();
    let corserror: any = window;
    corserror['loginapp'] = this;
    console.log('Request sent');
  }


  async loadData() {
    try {
      let res: any = await this.api.get('http://localhost:8080/form/signin.php');
      console.log('Response is ', res);
    } catch (e) {
    }
  }
  ngOnInit(): void {
  }



  go() {
 
    if (this.pasword == this.confirmPassword && /[^a-zA-Z0-9]/.test(this.pasword) && /[^a-zA-Z0-9]/.test(this.username)) {
      this.api.post('http://localhost:8080/form/signup.php', {
        username: this.username,
        password: this.pasword,
        confirmpassword: this.confirmPassword
      }).then((x: any) => {
        alert(x.message);
        console.log('Item Saved', x.message);
      }).catch((x: any) => {
        console.error('Error is', x);
      });
    }

    else {
      this.passworderror = "invalid user or password ";

    }
  }
}
