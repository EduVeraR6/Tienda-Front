import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductoDialogComponent } from './delete-producto-dialog.component';

describe('DeleteProductoDialogComponent', () => {
  let component: DeleteProductoDialogComponent;
  let fixture: ComponentFixture<DeleteProductoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
