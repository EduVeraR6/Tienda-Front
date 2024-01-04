import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge';
@NgModule({
exports:[
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatBadgeModule
]
})
export class MaterialModule { }
