import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewShopsComponent } from './overview-shops.component';

describe('OverviewShopsComponent', () => {
  let component: OverviewShopsComponent;
  let fixture: ComponentFixture<OverviewShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
