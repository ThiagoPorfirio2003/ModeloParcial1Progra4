import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderActoresComponent } from './header-actores.component';

describe('HeaderActoresComponent', () => {
  let component: HeaderActoresComponent;
  let fixture: ComponentFixture<HeaderActoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderActoresComponent]
    });
    fixture = TestBed.createComponent(HeaderActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
