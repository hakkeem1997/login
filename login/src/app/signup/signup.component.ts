import { Component, OnInit } from '@angular/core';
import{LoginService}from '../loginservice';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:any;
  pasword:any;
  confirmpassword:any;
  constructor(
    private api:LoginService
  ) 
  { this.loadData();
    let a:any = window;
    a['loginapp' ] = this;
    console.log('Request sent');
  }

  async loadData() {
    try {
      let res: any = await this.api.get(`http://localhost:8080/form/signin.php`);
      console.log('Response is ', res);
    } catch (e) {
    }
  }
  ngOnInit(): void {
  }
  go() {
    this.api.post('http://localhost:8080/form/signin.php', {
      username: this.username,
      password:this.pasword,
      confirmpassword:this.confirmpassword
    }).then((x:any) => {
      console.log('Item Saved', x);
    }).catch((x:any) => {
      console.error('Error is', x);
    });
  }

}
