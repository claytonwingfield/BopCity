import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicGridComponent } from './music-grid.component';

describe('MusicGridComponent', () => {
  let component: MusicGridComponent;
  let fixture: ComponentFixture<MusicGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
