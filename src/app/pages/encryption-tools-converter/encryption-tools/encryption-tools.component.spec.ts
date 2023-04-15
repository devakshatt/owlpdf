import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptionToolsComponent } from './encryption-tools.component';

describe('EncryptionToolsComponent', () => {
  let component: EncryptionToolsComponent;
  let fixture: ComponentFixture<EncryptionToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncryptionToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptionToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
