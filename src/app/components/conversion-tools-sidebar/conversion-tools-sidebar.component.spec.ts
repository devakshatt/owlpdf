import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionToolsSidebarComponent } from './conversion-tools-sidebar.component';

describe('ConversionToolsSidebarComponent', () => {
  let component: ConversionToolsSidebarComponent;
  let fixture: ComponentFixture<ConversionToolsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionToolsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionToolsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
