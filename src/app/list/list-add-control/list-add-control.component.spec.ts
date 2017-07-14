import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddControlComponent } from './list-add-control.component';

describe('ListAddControlComponent', () => {
  let component: ListAddControlComponent;
  let fixture: ComponentFixture<ListAddControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAddControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
