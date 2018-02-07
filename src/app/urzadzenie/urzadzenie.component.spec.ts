import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrzadzenieComponent } from './urzadzenie.component';

describe('UrzadzenieComponent', () => {
  let component: UrzadzenieComponent;
  let fixture: ComponentFixture<UrzadzenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrzadzenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrzadzenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
