import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOpenComponent } from './time-open.component';

describe('TimeOpenComponent', () => {
  let component: TimeOpenComponent;
  let fixture: ComponentFixture<TimeOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
