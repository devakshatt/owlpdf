import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToolsComponentComponent } from './text-tools-component.component';

describe('TextToolsComponentComponent', () => {
  let component: TextToolsComponentComponent;
  let fixture: ComponentFixture<TextToolsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextToolsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToolsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
