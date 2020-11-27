import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesCardComponent } from './planes-card.component';

describe('PlanesCardComponent', () => {
  let component: PlanesCardComponent;
  let fixture: ComponentFixture<PlanesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
