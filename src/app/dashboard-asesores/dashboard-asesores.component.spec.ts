import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAsesoresComponent } from './dashboard-asesores.component';

describe('DashboardAsesoresComponent', () => {
  let component: DashboardAsesoresComponent;
  let fixture: ComponentFixture<DashboardAsesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAsesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
