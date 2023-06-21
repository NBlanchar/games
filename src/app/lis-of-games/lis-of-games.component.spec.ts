import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisOfGamesComponent } from './lis-of-games.component';

describe('LisOfGamesComponent', () => {
  let component: LisOfGamesComponent;
  let fixture: ComponentFixture<LisOfGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisOfGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisOfGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
