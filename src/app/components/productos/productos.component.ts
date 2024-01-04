import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos!: Producto[];

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.dataService.getProductos().subscribe((r) => {
        console.log(r);
        this.productos = r;
      });
    }, 1000);
  }
}
