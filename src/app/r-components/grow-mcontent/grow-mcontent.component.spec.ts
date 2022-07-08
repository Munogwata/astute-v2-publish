import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowMcontentComponent } from './grow-mcontent.component';

describe('GrowMcontentComponent', () => {
  let component: GrowMcontentComponent;
  let fixture: ComponentFixture<GrowMcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowMcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowMcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
