import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewListsComponent } from './overview-lists.component';

describe('OverviewListsComponent', () => {
  let component: OverviewListsComponent;
  let fixture: ComponentFixture<OverviewListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
