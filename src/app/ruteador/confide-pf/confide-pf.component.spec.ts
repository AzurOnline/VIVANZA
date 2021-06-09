import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidePfComponent } from './confide-pf.component';

describe('ConfidePfComponent', () => {
  let component: ConfidePfComponent;
  let fixture: ComponentFixture<ConfidePfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidePfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidePfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
