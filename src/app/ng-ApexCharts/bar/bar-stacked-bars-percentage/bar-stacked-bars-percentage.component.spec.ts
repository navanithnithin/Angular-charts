import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarStackedBarsPercentageComponent } from './bar-stacked-bars-percentage.component';

describe('BarStackedBarsPercentageComponent', () => {
  let component: BarStackedBarsPercentageComponent;
  let fixture: ComponentFixture<BarStackedBarsPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarStackedBarsPercentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarStackedBarsPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
