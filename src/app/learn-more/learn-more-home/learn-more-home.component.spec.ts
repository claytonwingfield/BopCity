import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreHomeComponent } from './learn-more-home.component';

describe('LearnMoreHomeComponent', () => {
  let component: LearnMoreHomeComponent;
  let fixture: ComponentFixture<LearnMoreHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnMoreHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
