import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginComponent } from 'src/app/components/login/login.component';
import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  users : User[]=[
    {
      username :'admin',
      password :'123' 
    },
    {
      username :'eduardo',
      password: '123'
    }
  ]


  isAuthenticated : boolean = false;
  valido : boolean = false;
  roles : string[] = [];


  private usernameSubject = new BehaviorSubject<string | null>(null);
  username$: Observable<string | null> = this.usernameSubject.asObservable();

  constructor(private dialog:MatDialog , private router : Router) {
}

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
    
    const userFind = this.users.find(u => u.username == user.username && u.password == user.password)
    if(userFind){
      localStorage.setItem("usuario" , userFind.username)
      this.usernameSubject.next(localStorage.getItem('usuario')); 
  
      this.isAuthenticated = true;
      this.roles = ["admin"];
      return this.valido = true;
    } 
    return this.valido;
  }



  cerrarSesion(){
    this.usernameSubject.next(null)
    localStorage.clear();
    this.isAuthenticated=false;
    this.roles = [];
    this.router.navigateByUrl('')
  }


  usuarioAutenticado():boolean{
    return this.isAuthenticated;
  }


  hasRole(role : string): boolean{
    return this.isAuthenticated && this.roles.includes(role); 
  }

}
