import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptionToolsConverterComponent } from './encryption-tools-converter.component';

describe('EncryptionToolsConverterComponent', () => {
  let component: EncryptionToolsConverterComponent;
  let fixture: ComponentFixture<EncryptionToolsConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncryptionToolsConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptionToolsConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
