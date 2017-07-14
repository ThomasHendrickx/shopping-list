import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBottomControlComponent } from './list-bottom-control.component';

describe('ListBottomControlComponent', () => {
  let component: ListBottomControlComponent;
  let fixture: ComponentFixture<ListBottomControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBottomControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBottomControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
