import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoIndePfComponent } from './contrato-inde-pf.component';

describe('ContratoIndePfComponent', () => {
  let component: ContratoIndePfComponent;
  let fixture: ComponentFixture<ContratoIndePfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoIndePfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoIndePfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
