import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToolsSidebarComponent } from './number-tools-sidebar.component';

describe('NumberToolsSidebarComponent', () => {
  let component: NumberToolsSidebarComponent;
  let fixture: ComponentFixture<NumberToolsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberToolsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberToolsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
