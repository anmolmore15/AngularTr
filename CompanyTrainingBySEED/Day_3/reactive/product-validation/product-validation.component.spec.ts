import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductValidationComponent } from './product-validation.component';

describe('ProductValidationComponent', () => {
  let component: ProductValidationComponent;
  let fixture: ComponentFixture<ProductValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
