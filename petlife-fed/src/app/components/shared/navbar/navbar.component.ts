import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 buttons = [
  {
    buttonName: 'Home',
    buttonFunction: this.forHome
  },
  {
    buttonName: 'Home2',
    buttonFunction: this.forHome2
  }
]


  constructor() { }

  ngOnInit(): void {
  }

  forHome(){
   console.log("Primeiro botão");
  }
  forHome2(){
    console.log("Segundo botão");
   }
}
