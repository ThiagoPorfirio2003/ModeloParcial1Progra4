import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePeliculasComponent } from './detalle-peliculas.component';

describe('DetallePeliculasComponent', () => {
  let component: DetallePeliculasComponent;
  let fixture: ComponentFixture<DetallePeliculasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePeliculasComponent]
    });
    fixture = TestBed.createComponent(DetallePeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
