import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

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

  constructor() { }

  ngOnInit(): void {
  }

}
