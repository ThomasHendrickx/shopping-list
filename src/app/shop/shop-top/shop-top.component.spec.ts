import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTopComponent } from './shop-top.component';

describe('ShopTopComponent', () => {
  let component: ShopTopComponent;
  let fixture: ComponentFixture<ShopTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
