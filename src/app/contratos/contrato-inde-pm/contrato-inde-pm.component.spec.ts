import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoIndePmComponent } from './contrato-inde-pm.component';

describe('ContratoIndePmComponent', () => {
  let component: ContratoIndePmComponent;
  let fixture: ComponentFixture<ContratoIndePmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoIndePmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoIndePmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
