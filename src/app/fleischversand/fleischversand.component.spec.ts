import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleischversandComponent } from './fleischversand.component';

describe('FleischversandComponent', () => {
  let component: FleischversandComponent;
  let fixture: ComponentFixture<FleischversandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleischversandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleischversandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
