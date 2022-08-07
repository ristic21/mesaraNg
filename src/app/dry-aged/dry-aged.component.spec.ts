import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryAgedComponent } from './dry-aged.component';

describe('DryAgedComponent', () => {
  let component: DryAgedComponent;
  let fixture: ComponentFixture<DryAgedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DryAgedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DryAgedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
