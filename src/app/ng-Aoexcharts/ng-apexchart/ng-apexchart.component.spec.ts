import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgApexchartComponent } from './ng-apexchart.component';

describe('NgApexchartComponent', () => {
  let component: NgApexchartComponent;
  let fixture: ComponentFixture<NgApexchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgApexchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgApexchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
