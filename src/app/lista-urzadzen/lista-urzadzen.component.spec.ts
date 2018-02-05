import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUrzadzenComponent } from './lista-urzadzen.component';

describe('ListaUrzadzenComponent', () => {
  let component: ListaUrzadzenComponent;
  let fixture: ComponentFixture<ListaUrzadzenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUrzadzenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUrzadzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
