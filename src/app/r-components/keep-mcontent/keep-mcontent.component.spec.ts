import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepMcontentComponent } from './keep-mcontent.component';

describe('KeepMcontentComponent', () => {
  let component: KeepMcontentComponent;
  let fixture: ComponentFixture<KeepMcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepMcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeepMcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
