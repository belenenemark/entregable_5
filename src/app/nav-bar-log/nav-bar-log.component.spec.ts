import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLogComponent } from './nav-bar-log.component';

describe('NavBarLogComponent', () => {
  let component: NavBarLogComponent;
  let fixture: ComponentFixture<NavBarLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
