import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToolsComponent } from './number-tools.component';

describe('NumberToolsComponent', () => {
  let component: NumberToolsComponent;
  let fixture: ComponentFixture<NumberToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
