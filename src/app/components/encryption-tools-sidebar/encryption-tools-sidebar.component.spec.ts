import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptionToolsSidebarComponent } from './encryption-tools-sidebar.component';

describe('EncryptionToolsSidebarComponent', () => {
  let component: EncryptionToolsSidebarComponent;
  let fixture: ComponentFixture<EncryptionToolsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncryptionToolsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptionToolsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
