import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAndwhiskersComponent } from './box-andwhiskers.component';

describe('BoxAndwhiskersComponent', () => {
  let component: BoxAndwhiskersComponent;
  let fixture: ComponentFixture<BoxAndwhiskersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxAndwhiskersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxAndwhiskersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
