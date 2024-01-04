import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoServiceService } from 'src/app/services/productoService/producto-service.service';

@Component({
  selector: 'app-ver-producto-dialog',
  templateUrl: './ver-producto-dialog.component.html',
  styleUrls: ['./ver-producto-dialog.component.css']
})
export class VerProductoDialogComponent implements OnInit {


  producto! : Producto;

  constructor(public dialogRef : MatDialogRef<VerProductoDialogComponent>, @Inject(MAT_DIALOG_DATA) data : any ,private productoService : ProductoServiceService) { 

    this.loadProduct(data.id);

  }

  ngOnInit(): void {
  }


  loadProduct(idProducto : number){
    this.productoService.obtenerProducto(idProducto).subscribe(r=>{
      this.producto = r;
      console.log(this.producto)
    });

  }




}
