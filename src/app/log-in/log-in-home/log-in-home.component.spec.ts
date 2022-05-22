import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInHomeComponent } from './log-in-home.component';

describe('LogInHomeComponent', () => {
  let component: LogInHomeComponent;
  let fixture: ComponentFixture<LogInHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
