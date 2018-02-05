import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFirmComponent } from './lista-firm.component';

describe('ListaFirmComponent', () => {
  let component: ListaFirmComponent;
  let fixture: ComponentFixture<ListaFirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
