import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionToolsAnyToAnyComponent } from './conversion-tools-any-to-any.component';

describe('ConversionToolsAnyToAnyComponent', () => {
  let component: ConversionToolsAnyToAnyComponent;
  let fixture: ComponentFixture<ConversionToolsAnyToAnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionToolsAnyToAnyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionToolsAnyToAnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
