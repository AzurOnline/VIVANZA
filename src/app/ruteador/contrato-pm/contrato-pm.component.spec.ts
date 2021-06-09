import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoPmComponent } from './contrato-pm.component';

describe('ContratoPmComponent', () => {
  let component: ContratoPmComponent;
  let fixture: ComponentFixture<ContratoPmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoPmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
