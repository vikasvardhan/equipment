import { Component, OnInit, Inject } from "@angular/core";
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from "@angular/material/bottom-sheet";
import { EquipmentService } from "../equipment.service";
import { validateHorizontalPosition } from "@angular/cdk/overlay";

@Component({
  selector: "app-add-equipment-dialog",
  templateUrl: "./add-equipment-dialog.component.html",
  styleUrls: ["./add-equipment-dialog.component.scss"],
})
export class AddEquipmentDialogComponent implements OnInit {
  public addObj: any = {
    SerialNumber: "",
    Make: "",
    Model: "",
    MeterReading: "",
    Warranty: null,
  };
  public edit: boolean = false;
  constructor(
    private bottomSheetRef: MatBottomSheetRef<AddEquipmentDialogComponent>,
    private equipService: EquipmentService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  ngOnInit() {
    if (this.data) {
      this.addObj = Object.assign({}, this.data.value);
      this.addObj.Warranty = null;
      this.edit = true;
    }
  }

  public addEquipment() {
    if (this.validate()) {
      this.equipService.createEquipment(this.addObj);
      this.bottomSheetRef.dismiss();
    }
  }
  public editEquipment() {
    if (this.validate()) {
      this.data.value = this.addObj;
      this.equipService.updateEquipment(this.data.key, this.data);
      this.bottomSheetRef.dismiss();
    }
  }

  public validate() {
    let valid = true;
    if (
      this.addObj.SerialNumber == "" ||
      this.addObj.Make == "" ||
      this.addObj.Model == "" ||
      this.addObj.MeterReading == ""
    )
      valid = false;
    return valid;
  }
  public cancel() {
    this.bottomSheetRef.dismiss();
  }
}
