import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingStatusComponent } from './funding-status.component';

describe('FundingStatusComponent', () => {
  let component: FundingStatusComponent;
  let fixture: ComponentFixture<FundingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundingStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
