import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  isLogedin : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  loginAction() {
    this.isLogedin = !this.isLogedin
  } 
}
