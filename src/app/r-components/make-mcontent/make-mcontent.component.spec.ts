import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeMcontentComponent } from './make-mcontent.component';

describe('MakeMcontentComponent', () => {
  let component: MakeMcontentComponent;
  let fixture: ComponentFixture<MakeMcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeMcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeMcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
