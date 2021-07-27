import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoTiempoDeterminadoPmComponent } from './contrato-tiempo-determinado-pm.component';

describe('ContratoTiempoDeterminadoPmComponent', () => {
  let component: ContratoTiempoDeterminadoPmComponent;
  let fixture: ComponentFixture<ContratoTiempoDeterminadoPmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoTiempoDeterminadoPmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoTiempoDeterminadoPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
