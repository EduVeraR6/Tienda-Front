import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from 'src/app/services/productoService/producto-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private productDialog : ProductoServiceService) { 

  }

  ngOnInit(): void {
  }


  openAddProduct(){
    this.productDialog.openAddProduct();
  }




}
