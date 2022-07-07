import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMoneyComponent } from './home-money.component';

describe('HomeMoneyComponent', () => {
  let component: HomeMoneyComponent;
  let fixture: ComponentFixture<HomeMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
