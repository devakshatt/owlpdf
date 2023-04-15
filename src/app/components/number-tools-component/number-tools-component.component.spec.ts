import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToolsComponentComponent } from './number-tools-component.component';

describe('NumberToolsComponentComponent', () => {
  let component: NumberToolsComponentComponent;
  let fixture: ComponentFixture<NumberToolsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberToolsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberToolsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
