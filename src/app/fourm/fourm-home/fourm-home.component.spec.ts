import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourmHomeComponent } from './fourm-home.component';

describe('FourmHomeComponent', () => {
  let component: FourmHomeComponent;
  let fixture: ComponentFixture<FourmHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourmHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
