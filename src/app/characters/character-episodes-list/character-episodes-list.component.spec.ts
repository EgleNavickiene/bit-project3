import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEpisodesListComponent } from './character-episodes-list.component';

describe('CharacterEpisodesListComponent', () => {
  let component: CharacterEpisodesListComponent;
  let fixture: ComponentFixture<CharacterEpisodesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterEpisodesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterEpisodesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
