import { Component, OnInit } from "@angular/core";
import { EquipmentService } from "../equipment.service";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { AddEquipmentDialogComponent } from "../add-equipment-dialog/add-equipment-dialog.component";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.scss"],
})
export class EquipmentComponent implements OnInit {
  public equipments: any;
  public warranties: any;
  constructor(
    private equipService: EquipmentService,
    private bottomSheet: MatBottomSheet
  ) {}

  // Equipment Related
  ngOnInit() {
    this.equipService.getEquipment().subscribe((data) => {
      this.equipments = data.reverse();
      this.getWarranties();
    });
  }

  addEquipment() {
    this.bottomSheet.open(AddEquipmentDialogComponent);
  }

  editEquipment(obj: any) {
    this.bottomSheet.open(AddEquipmentDialogComponent, {
      data: obj,
    });
  }

  deleteEquipment(obj) {
    this.equipService.deleteEquipment(obj);
  }

  // Warranty Related
  addWarranty(obj: any) {
    obj.edit = true;
    obj.Warranty = {
      StartDate: this.setCurrentDate(),
      EndDate: this.setCurrentDate(),
    };
  }
  getWarranties() {
    this.equipService.getWarranty().subscribe((data) => {
      this.warranties = data;
      for (let item of data) {
        for (let equip of this.equipments) {
          if (item.value["equipmentId"] == equip.key) {
            equip.value.Warranty = item.value;
          }
        }
      }
    });
  }

  saveWarranty(obj: any) {
    if (
      !obj.value.Warranty.equipmentId ||
      obj.value.Warranty.equipmentId == ""
    ) {
      obj.value.Warranty.equipmentId = obj.key;
      this.equipService.createWarranty(obj.value.Warranty);
    } else {
      for (let item of this.warranties) {
        if (item.value["equipmentId"] == obj.key)
          this.equipService.updateWarranty(item.key, item);
      }
    }
    obj.value.edit = !obj.value.edit;
  }

  //Date Related
  setCurrentDate() {
    const y = new Date().getFullYear(),
      dt = ("0" + new Date().getDate()).slice(-2),
      m = ("0" + (new Date().getMonth() + 1)).slice(-2);
    const date = y + "-" + m + "-" + dt;
    console.log(date);
    return date;
  }
}
