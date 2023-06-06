import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPaginaComponent } from './error-pagina.component';

describe('ErrorPaginaComponent', () => {
  let component: ErrorPaginaComponent;
  let fixture: ComponentFixture<ErrorPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ErrorPaginaComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
