import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasDeActorComponent } from './peliculas-de-actor.component';

describe('PeliculasDeActorComponent', () => {
  let component: PeliculasDeActorComponent;
  let fixture: ComponentFixture<PeliculasDeActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculasDeActorComponent]
    });
    fixture = TestBed.createComponent(PeliculasDeActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
