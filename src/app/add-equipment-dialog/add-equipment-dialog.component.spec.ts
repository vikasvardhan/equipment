import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentDialogComponent } from './add-equipment-dialog.component';

describe('AddEquipmentDialogComponent', () => {
  let component: AddEquipmentDialogComponent;
  let fixture: ComponentFixture<AddEquipmentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEquipmentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEquipmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
