import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineBrushChartComponent } from './line-brush-chart.component';

describe('LineBrushChartComponent', () => {
  let component: LineBrushChartComponent;
  let fixture: ComponentFixture<LineBrushChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineBrushChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineBrushChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
