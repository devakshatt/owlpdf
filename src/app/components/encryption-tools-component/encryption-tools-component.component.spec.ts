import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptionToolsComponentComponent } from './encryption-tools-component.component';

describe('EncryptionToolsComponentComponent', () => {
  let component: EncryptionToolsComponentComponent;
  let fixture: ComponentFixture<EncryptionToolsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncryptionToolsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptionToolsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
