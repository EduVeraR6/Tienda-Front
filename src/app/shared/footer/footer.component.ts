import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  username;

  constructor() {
    this.username = localStorage.getItem('usuario');
   }

  ngOnInit(): void {
  }

}
