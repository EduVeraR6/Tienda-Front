import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/loginService/login-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  username! : string | null;

  constructor(private loginService : LoginServiceService , private router : Router) { 

  }

  ngOnInit(): void {
      this.loginService.username$.subscribe(r => {

        this.username = r;

      })
  }

  ruta():boolean{
    return this.router.url === '/dashboard';
  }

  openDialog(){
    this.loginService.openLogin();
  }

  cerrarSesion(){
    this.loginService.cerrarSesion();
  }


}
