import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username: any;
  email: any;
  password: any;
  confirmpassword: any;
  usersignup: any = [];
  msg: any;
  fileName: any;
  signupsuccess: any;
  alertname: any;
  mailalert: any;
  passwordalert: any;
  passwordconfirmpassword: any;
  namealreadyexist: any;
  routerlink: any;
  usercapture: any = [];
  constructor(private routes: Router) { }

  ngOnInit() { }
  signup() {
    //validate the name is alphabets,and space with caps only
    if (!/^[A-Z]+[ a-zA-z]+$/.test(this.username) || this.username == '') {
      this.alertname = 'name starts with caps,alphabets and space is accepted';
    }

    //validate the email 
    else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.][a-zA-z]+$/.test(this.email) || this.email == '') {
      this.mailalert = 'enter a valid email(@ .)';
    }

    //validate the password must be start with caps and special character appear
    else if (! /^[A-Z]+[a-zA-z0-9+_.-]+$/.test(this.password) || this.password == '') {
      this.passwordalert = 'password start with caps and special characters,numbers are allowed';
    }

    //validate password and confuiem pasword should be matched
    else if (this.password != this.confirmpassword) {
      this.passwordconfirmpassword = 'password not matched';
    }
    //if the above condition is successed then the name and password should store in local storage

    else {
      let usernamepassword = {
        "name": this.username,      //signup name wil appeared
        "pasword": this.password,    //signup password will appeared
      }

      if (!localStorage.getItem('user')) {
        this.usersignup.push(usernamepassword);                        //here usersignup is an array in that get an object which getting a username and password

        localStorage.setItem('user', JSON.stringify(this.usersignup)); //here declare a keyword as a use asnd stringify the object
        this.signupsuccess = "signup successfully";                    //if its all condition are true saved in local storage and notify the signup successfully      

      }
      else {
        let existingData = JSON.parse(localStorage.getItem('user'));

        //it checks the username which is stored in a localstorage
        if (!(existingData.find(response => response.name == this.username))) {
          existingData.push(usernamepassword);
          localStorage.setItem('user', JSON.stringify(existingData));
          this.namealreadyexist = " ";                                //username alreeady exist should empty
          this.alertname = "";                                        //name input field box empty after signup succesfully
          this.mailalert = " ";                                       //mail input field box empty after signup succesfully
          this.passwordalert = " ";                                   //password input field box empty after signup succesfully
          this.passwordconfirmpassword = " ";                         //confirm password input field box empty after signup succesfully
          this.signupsuccess = "signup successfully";
        }
        else {
          this.namealreadyexist = "user name  already exist"          //if the user name is already present in storage alert will come
        }
      }
    }
  }

  home() {
    this.signupsuccess = "signup successfully";
    this.alertname = ' '
    this.mailalert = ' '
    this.passwordalert = ' '
    this.passwordconfirmpassword = ' '
    this.namealreadyexist = ' '
    this.signupsuccess = ' '
    this.routes.navigate(['/home']);
    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmpassword = '';
  }
}

