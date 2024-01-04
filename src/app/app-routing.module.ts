import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { Page404Component } from './shared/page404/page404.component';

const routes: Routes = [

  {
    path:'',
    component :ProductosComponent,
    pathMatch : 'full'
  },
  {
    path:'dashboard',
    component : DashboardComponent,
    canActivate : [LoginGuardGuard],
    data : {roles :['admin']}
  },
  {
    path : '404',
    component :Page404Component
  },
  {
    path:'**',
    redirectTo : '404' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
