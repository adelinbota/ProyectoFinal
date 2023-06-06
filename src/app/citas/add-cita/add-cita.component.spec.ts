import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitaComponent } from './add-cita.component';

describe('AddCitaComponent', () => {
  let component: AddCitaComponent;
  let fixture: ComponentFixture<AddCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [AddCitaComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();

    fixture = TestBed.createComponent(AddCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
