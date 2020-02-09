import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDriverComponent } from './admindriver.component';

describe('AdminDriverComponent', () => {
  let component: AdminDriverComponent;
  let fixture: ComponentFixture<AdminDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
