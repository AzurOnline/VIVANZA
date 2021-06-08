import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoPfComponent } from './contrato-pf.component';

describe('ContratoPfComponent', () => {
  let component: ContratoPfComponent;
  let fixture: ComponentFixture<ContratoPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoPfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
