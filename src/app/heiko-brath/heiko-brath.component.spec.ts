import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeikoBrathComponent } from './heiko-brath.component';

describe('HeikoBrathComponent', () => {
  let component: HeikoBrathComponent;
  let fixture: ComponentFixture<HeikoBrathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeikoBrathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeikoBrathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
