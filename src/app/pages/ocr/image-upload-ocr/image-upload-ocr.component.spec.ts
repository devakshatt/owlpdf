import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadOcrComponent } from './image-upload-ocr.component';

describe('ImageUploadOcrComponent', () => {
  let component: ImageUploadOcrComponent;
  let fixture: ComponentFixture<ImageUploadOcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploadOcrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadOcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
