import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityTypesComponent } from './quantity-types.component';

describe('QuantityTypesComponent', () => {
  let component: QuantityTypesComponent;
  let fixture: ComponentFixture<QuantityTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
