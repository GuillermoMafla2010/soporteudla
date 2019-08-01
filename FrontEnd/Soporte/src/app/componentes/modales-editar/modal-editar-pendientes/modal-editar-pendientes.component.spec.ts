import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarPendientesComponent } from './modal-editar-pendientes.component';

describe('ModalEditarPendientesComponent', () => {
  let component: ModalEditarPendientesComponent;
  let fixture: ComponentFixture<ModalEditarPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
