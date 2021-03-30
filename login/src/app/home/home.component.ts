import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../loginservice';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoginService]
})
export class HomeComponent implements OnInit {
  username: any;
  password: any;
  msg: any;
  error: any;
  constructor(private service: LoginService, private routes: Router, private api: LoginService) {
    this.loadData();
    let corserror: any = window;
    corserror['loginapp'] = this;
    console.log('Request sent');
  }

  async loadData() {
    try {
      let res: any = await this.api.get('http://localhost:8080/form/loc.php');
      console.log('Response is ', res);
    } catch (e) {
    }
  }

  ngOnInit(): void {
  }


  check() {
    if (this.username && this.password) {
      this.api.post('http://localhost:8080/form/signin.php', {
        username: this.username,
        password: this.password
      }).then(res => {

        if (res == true) {
          localStorage.setItem('username', this.username);
          this.routes.navigate(['/dashboard']);
        }
        else {
          this.error = "invaliduser";
        }
      })

    }
    else {
      this.msg = 'Invalid username or password';
    }

    //     var output = this.service.checkusernameandpassword(this.username,this.password);
    //     if(output == true)
    //     {
    //       this.routes.navigate(['/dashboard']);
    //     }
    //     else{
    // this.msg ='Invalid username or password';
    //     }
  }

}
