import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryFreeHomeComponent } from './try-free-home.component';

describe('TryFreeHomeComponent', () => {
  let component: TryFreeHomeComponent;
  let fixture: ComponentFixture<TryFreeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryFreeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryFreeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
