import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasComponent } from './citas.component';

describe('CitasComponent', () => {
  let component: CitasComponent;
  let fixture: ComponentFixture<CitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [CitasComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();

    fixture = TestBed.createComponent(CitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
