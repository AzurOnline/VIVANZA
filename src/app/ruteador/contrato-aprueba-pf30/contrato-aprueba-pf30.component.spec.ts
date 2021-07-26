import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoApruebaPf30Component } from './contrato-aprueba-pf30.component';

describe('ContratoApruebaPf30Component', () => {
  let component: ContratoApruebaPf30Component;
  let fixture: ComponentFixture<ContratoApruebaPf30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoApruebaPf30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoApruebaPf30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
