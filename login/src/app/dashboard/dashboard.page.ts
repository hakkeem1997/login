import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userid: any;
  userName: string;
  img: string;
  photosArray:any=[];

  constructor() {
    // const userimage = localStorage.getItem('user');
    // if (userimage) {
    //   this.photosArray =JSON.parse(userimage);
    // }
  }


  ngOnInit() {
    // debugger;
    this.userName = localStorage.getItem('loginuser')

  }

  
 
}
