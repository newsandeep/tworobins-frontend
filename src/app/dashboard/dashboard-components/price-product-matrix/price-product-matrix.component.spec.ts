import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceProductMatrixComponent } from './price-product-matrix.component';

describe('PriceProductMatrixComponent', () => {
  let component: PriceProductMatrixComponent;
  let fixture: ComponentFixture<PriceProductMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceProductMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceProductMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
