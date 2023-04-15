import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToolsConverterComponent } from './text-tools-converter.component';

describe('TextToolsConverterComponent', () => {
  let component: TextToolsConverterComponent;
  let fixture: ComponentFixture<TextToolsConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextToolsConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToolsConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
