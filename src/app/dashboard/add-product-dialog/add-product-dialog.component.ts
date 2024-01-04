import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoServiceService } from 'src/app/services/productoService/producto-service.service';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent implements OnInit {

  productForm! : FormGroup;

  constructor(private productoService : ProductoServiceService ) { }

  crearFormulario (){
    this.productForm = new FormGroup({

      nombre : new FormControl('',[Validators.required]),
      precio  : new FormControl('', [Validators.required]),
      descripcion : new FormControl('',[Validators.required]),
      imagen : new FormControl('',Validators.required)

    })
  }


  ngOnInit(): void {
    this.crearFormulario();
  }

  addProduct(){
    setTimeout(()=>{
      console.log('Producto Añadido');
      this.productoService.closeDialog();
    },500)
  }




}
