import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopControlComponent } from './list-top-control.component';

describe('ListTopControlComponent', () => {
  let component: ListTopControlComponent;
  let fixture: ComponentFixture<ListTopControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTopControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
