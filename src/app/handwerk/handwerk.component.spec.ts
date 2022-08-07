import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandwerkComponent } from './handwerk.component';

describe('HandwerkComponent', () => {
  let component: HandwerkComponent;
  let fixture: ComponentFixture<HandwerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandwerkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandwerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
