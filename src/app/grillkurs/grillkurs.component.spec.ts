import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillkursComponent } from './grillkurs.component';

describe('GrillkursComponent', () => {
  let component: GrillkursComponent;
  let fixture: ComponentFixture<GrillkursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrillkursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillkursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
