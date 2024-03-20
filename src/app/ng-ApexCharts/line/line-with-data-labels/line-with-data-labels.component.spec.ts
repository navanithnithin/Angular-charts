import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineWithDataLabelsComponent } from './line-with-data-labels.component';

describe('LineWithDataLabelsComponent', () => {
  let component: LineWithDataLabelsComponent;
  let fixture: ComponentFixture<LineWithDataLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineWithDataLabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineWithDataLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
