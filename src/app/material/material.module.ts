import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
exports:[
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule
]
})
export class MaterialModule { }
