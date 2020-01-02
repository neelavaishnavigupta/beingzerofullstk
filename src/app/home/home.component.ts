import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  x:string = "Vaishnavi";
  y:number = 1;
  z:boolean = true;
  constructor() { }

  ngOnInit() {
    this.x = this.x + "1999";
  }
  fnclick()
  {
    this.x=this.x+ "v";
  }

}
