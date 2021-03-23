import { Component, OnInit } from '@angular/core';

import{LoginService}from '../loginservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
username:any;
password:any;
  constructor( ) {
    
   }

   
  ngOnInit(): void {
  }
 

 

}
