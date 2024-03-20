import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGroupedStackedBarsComponent } from './bar-grouped-stacked-bars.component';

describe('BarGroupedStackedBarsComponent', () => {
  let component: BarGroupedStackedBarsComponent;
  let fixture: ComponentFixture<BarGroupedStackedBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarGroupedStackedBarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGroupedStackedBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
