import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVerClientesComponent } from './modal-ver-clientes.component';

describe('ModalVerClientesComponent', () => {
  let component: ModalVerClientesComponent;
  let fixture: ComponentFixture<ModalVerClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVerClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVerClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
