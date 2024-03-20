import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartWithAnnotationsComponent } from './line-chart-with-annotations.component';

describe('LineChartWithAnnotationsComponent', () => {
  let component: LineChartWithAnnotationsComponent;
  let fixture: ComponentFixture<LineChartWithAnnotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartWithAnnotationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartWithAnnotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
