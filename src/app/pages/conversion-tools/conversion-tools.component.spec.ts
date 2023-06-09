import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionToolsComponent } from './conversion-tools.component';

describe('ConversionToolsComponent', () => {
  let component: ConversionToolsComponent;
  let fixture: ComponentFixture<ConversionToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
