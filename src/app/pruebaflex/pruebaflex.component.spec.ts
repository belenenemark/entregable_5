import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaflexComponent } from './pruebaflex.component';

describe('PruebaflexComponent', () => {
  let component: PruebaflexComponent;
  let fixture: ComponentFixture<PruebaflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaflexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
