import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorModificarComponent } from './profesor-modificar.component';

describe('ProfesorModificarComponent', () => {
  let component: ProfesorModificarComponent;
  let fixture: ComponentFixture<ProfesorModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
