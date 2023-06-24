import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLookupComponent } from './game-lookup.component';

describe('GameLookupComponent', () => {
  let component: GameLookupComponent;
  let fixture: ComponentFixture<GameLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
