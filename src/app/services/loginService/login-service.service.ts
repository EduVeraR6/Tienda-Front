import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/components/login/login.component';
import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  userService : string = "eduardo"; 
  passService : string = "123";
  valido : boolean = false;


  constructor(private dialog:MatDialog) { }

  openLogin(){

    const dialogRef = this.dialog.open(LoginComponent,{
       width : '500px',
       position:{
        top:'50px'
       }
    })


    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog was closed ${result}`);
    })
  }

  closeLogin(){
    this.dialog.closeAll();
  }




  validarUsuario(user: User):Boolean{
    if((this.userService == user.username && this.passService == user.password)){
      return this.valido = true;
    } 
    return this.valido;
  }



}
