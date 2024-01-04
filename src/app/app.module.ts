import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductosComponent } from './components/productos/productos.component';
import { MaterialModule } from './material/material.module';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';
import { Page404Component } from './shared/page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { Page403Component } from './shared/page403/page403.component';
import { AddProductDialogComponent } from './dashboard/add-product-dialog/add-product-dialog.component';
import { VerProductoDialogComponent } from './dashboard/ver-producto-dialog/ver-producto-dialog.component';
import { DeleteProductoDialogComponent } from './dashboard/delete-producto-dialog/delete-producto-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    DashboardListComponent,
    Page404Component,
    Page403Component,
    AddProductDialogComponent,
    VerProductoDialogComponent,
    DeleteProductoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
