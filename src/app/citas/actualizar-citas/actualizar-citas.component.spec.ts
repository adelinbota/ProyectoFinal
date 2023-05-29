import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCitasComponent } from './actualizar-citas.component';

describe('ActualizarCitasComponent', () => {
  let component: ActualizarCitasComponent;
  let fixture: ComponentFixture<ActualizarCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
