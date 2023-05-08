import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarServiciosComponent } from './actualizar-servicios.component';

describe('ActualizarServiciosComponent', () => {
  let component: ActualizarServiciosComponent;
  let fixture: ComponentFixture<ActualizarServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
