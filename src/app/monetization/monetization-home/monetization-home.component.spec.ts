import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonetizationHomeComponent } from './monetization-home.component';

describe('MonetizationHomeComponent', () => {
  let component: MonetizationHomeComponent;
  let fixture: ComponentFixture<MonetizationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonetizationHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonetizationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
