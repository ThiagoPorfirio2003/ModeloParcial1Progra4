import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisActorComponent } from './pais-actor.component';

describe('PaisActorComponent', () => {
  let component: PaisActorComponent;
  let fixture: ComponentFixture<PaisActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaisActorComponent]
    });
    fixture = TestBed.createComponent(PaisActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
