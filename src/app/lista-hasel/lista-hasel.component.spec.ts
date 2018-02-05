import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHaselComponent } from './lista-hasel.component';

describe('ListaHaselComponent', () => {
  let component: ListaHaselComponent;
  let fixture: ComponentFixture<ListaHaselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHaselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHaselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
