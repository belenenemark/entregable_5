import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLogComponent } from './footer-log.component';

describe('FooterLogComponent', () => {
  let component: FooterLogComponent;
  let fixture: ComponentFixture<FooterLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
