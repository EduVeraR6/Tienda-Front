import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/interfaces/user.interface';
import { LoginServiceService } from 'src/app/services/loginService/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = {
   username : "",
   password : ""
  };

  username : string ="";
  password : string = "";



  constructor(private loginService : LoginServiceService , private router : Router) { }

  ngOnInit(): void {
  }


  ingresar(){

    console.log(this.username + this.password)



    this.user.username = this.username;
    this.user.password = this.password;

    if(this.loginService.validarUsuario(this.user)){
      this.router.navigateByUrl('/dashboard')
      this.loginService.closeLogin();
    }else{
      alert("Error con las credenciales")
    }

  }




}
