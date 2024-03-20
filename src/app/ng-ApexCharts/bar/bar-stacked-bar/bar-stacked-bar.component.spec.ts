import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarStackedBarComponent } from './bar-stacked-bar.component';

describe('BarStackedBarComponent', () => {
  let component: BarStackedBarComponent;
  let fixture: ComponentFixture<BarStackedBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarStackedBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarStackedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
