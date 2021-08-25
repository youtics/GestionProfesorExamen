import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorCrearComponent } from './profesor-crear.component';

describe('ProfesorCrearComponent', () => {
  let component: ProfesorCrearComponent;
  let fixture: ComponentFixture<ProfesorCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
