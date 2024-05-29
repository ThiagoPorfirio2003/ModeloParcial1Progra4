import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPeliculasComponent } from './header-peliculas.component';

describe('HeaderPeliculasComponent', () => {
  let component: HeaderPeliculasComponent;
  let fixture: ComponentFixture<HeaderPeliculasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPeliculasComponent]
    });
    fixture = TestBed.createComponent(HeaderPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
