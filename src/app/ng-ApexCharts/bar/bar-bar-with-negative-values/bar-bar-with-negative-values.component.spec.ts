import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarBarWithNegativeValuesComponent } from './bar-bar-with-negative-values.component';

describe('BarBarWithNegativeValuesComponent', () => {
  let component: BarBarWithNegativeValuesComponent;
  let fixture: ComponentFixture<BarBarWithNegativeValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarBarWithNegativeValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarBarWithNegativeValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
