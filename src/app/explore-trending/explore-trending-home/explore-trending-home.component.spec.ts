import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTrendingHomeComponent } from './explore-trending-home.component';

describe('ExploreTrendingHomeComponent', () => {
  let component: ExploreTrendingHomeComponent;
  let fixture: ComponentFixture<ExploreTrendingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreTrendingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreTrendingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
