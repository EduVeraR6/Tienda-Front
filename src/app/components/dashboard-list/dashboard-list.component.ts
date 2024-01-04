import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';
import { ProductoServiceService } from 'src/app/services/productoService/producto-service.service';

const ELEMENT_DATA : Producto[]=[
  {
    id:1 ,image : 'imagen' , title:"Laptop Dell", price:2500, description : "Descripcion"
  }
]


@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})


export class DashboardListComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  productos! : Producto[] ;


  constructor(private dataService : DataServiceService , private productoService : ProductoServiceService) { 
  }

  ngOnInit(): void {
    
    this.dataService.getProductos().subscribe(r =>{
      console.log(r);
      this.productos = r;
    })
    
  }


  verDetalles(id : number){
    this.productoService.openProductoDetalles(id);
  }

  openEliminar(id : number){
    this.productoService.openProductoDelete(id);
  }



}
