import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidePmComponent } from './confide-pm.component';

describe('ConfidePmComponent', () => {
  let component: ConfidePmComponent;
  let fixture: ComponentFixture<ConfidePmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidePmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidePmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
