import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowOcrWorkComponent } from './how-ocr-work.component';

describe('HowOcrWorkComponent', () => {
  let component: HowOcrWorkComponent;
  let fixture: ComponentFixture<HowOcrWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowOcrWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowOcrWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
