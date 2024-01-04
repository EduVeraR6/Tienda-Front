import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from 'src/app/dashboard/add-product-dialog/add-product-dialog.component';
import { VerProductoDialogComponent } from 'src/app/dashboard/ver-producto-dialog/ver-producto-dialog.component';
import { environment } from './../../../environments/environment.prod';
import { Producto } from 'src/app/interfaces/producto.interface';
import { Observable } from 'rxjs';
import { DeleteProductoDialogComponent } from 'src/app/dashboard/delete-producto-dialog/delete-producto-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ProductoServiceService {
  constructor(private dialog: MatDialog, private http: HttpClient) {}

  //Dialogs
  openAddProduct() {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '500px',
      position: {
        top: '50px',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog was closed ${result}`);
    });
  }

  openProductoDetalles(id: number) {
    const dialogRef = this.dialog.open(VerProductoDialogComponent, {
      width: '500px',
      position: {
        top: '50px',
      },
      data: { id },
    });

    dialogRef.afterClosed().subscribe((r) => {
      console.log('ventana cerrada');
    });
  }

  openProductoDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteProductoDialogComponent, {
      width: '500px',
      position: {
        top: '50px',
      },
      data: { id },
    });

    dialogRef.afterClosed().subscribe((r) => {
      console.log('ventana cerrada');
    });
  }


  closeDialog() {
    this.dialog.closeAll();
  }

  //Data

  obtenerProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(environment.apiUrl+'/'+id);
  }
}
