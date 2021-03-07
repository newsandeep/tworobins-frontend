import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSiteMatrixComponent } from './price-site-matrix.component';

describe('PriceSiteMatrixComponent', () => {
  let component: PriceSiteMatrixComponent;
  let fixture: ComponentFixture<PriceSiteMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceSiteMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceSiteMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
