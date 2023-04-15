import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToolsConverterComponent } from './number-tools-converter.component';

describe('NumberToolsConverterComponent', () => {
  let component: NumberToolsConverterComponent;
  let fixture: ComponentFixture<NumberToolsConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberToolsConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberToolsConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
