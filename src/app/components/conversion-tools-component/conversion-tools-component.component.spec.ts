import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionToolsComponentComponent } from './conversion-tools-component.component';

describe('ConversionToolsComponentComponent', () => {
  let component: ConversionToolsComponentComponent;
  let fixture: ComponentFixture<ConversionToolsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionToolsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionToolsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
