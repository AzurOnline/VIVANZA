import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoTiempoDeterminadoPfComponent } from './contrato-tiempo-determinado-pf.component';

describe('ContratoTiempoDeterminadoPfComponent', () => {
  let component: ContratoTiempoDeterminadoPfComponent;
  let fixture: ComponentFixture<ContratoTiempoDeterminadoPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoTiempoDeterminadoPfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoTiempoDeterminadoPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
