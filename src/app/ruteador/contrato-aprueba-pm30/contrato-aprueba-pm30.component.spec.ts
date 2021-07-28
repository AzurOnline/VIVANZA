import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoApruebaPm30Component } from './contrato-aprueba-pm30.component';

describe('ContratoApruebaPm30Component', () => {
  let component: ContratoApruebaPm30Component;
  let fixture: ComponentFixture<ContratoApruebaPm30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoApruebaPm30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoApruebaPm30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

