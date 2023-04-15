import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognitionLanguagesComponent } from './recognition-languages.component';

describe('RecognitionLanguagesComponent', () => {
  let component: RecognitionLanguagesComponent;
  let fixture: ComponentFixture<RecognitionLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecognitionLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognitionLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
