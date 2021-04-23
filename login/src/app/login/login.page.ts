import { JSDocComment, ThrowStmt } from '@angular/compiler';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';
import { RouterModule, } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [MyserviceService]
})
export class LoginPage implements OnInit {
  loginname: any;
  loginpassword: any;
  usersignup: any;
  msg: any;
  loginuser: any;
  loginid: any;
  
  constructor(private routes: Router, private service: MyserviceService) {
  }
  ngOnInit() { }
  check() {
     //get a local storage from the sign up as a loginid
     debugger;
    let loginid = JSON.parse(localStorage.getItem('user'))   
  

    //find in loginid the required name and password are  in a local storage if it is in local storage its true
    if (loginid.find(res => res.name == this.loginname && res.pasword == this.loginpassword)) {
      // localStorage.setItem('loginname', 'true');
      localStorage.setItem('loginuser', this.loginname);//this is for publish a username in dashboard 
      // localStorage.SetItem('userid',this.loginid)
      this.loginname = '';                    //loginname input field box empty after login 
      this.loginpassword = '';                //loginpassword input field box empty after login
      this.msg = '';                          //msg  alert empty after login succesfully
      this.routes.navigate(['/dashboard']);
    }



    else {
      this.msg = "invalid username or pasword"; //msg will show if the username or password is invalid
    }
  }

  home() {
    this.loginname = '';                        //loginname  alert empty after login succesfully
    this.loginpassword = '';                    //login  alert empty after login succesfully
    this.routes.navigate(['/home']);            
  }
}





