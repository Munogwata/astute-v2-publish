import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMcontentComponent } from './home-mcontent.component';

describe('HomeMcontentComponent', () => {
  let component: HomeMcontentComponent;
  let fixture: ComponentFixture<HomeMcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
