import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class EquipmentService {
  public equipments: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {}

  public getEquipment() {
    this.equipments = this.db
      .list("/equipments")
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, value: c.payload.val() }))
        )
      );
    return this.equipments;
  }

  public createEquipment(obj: any) {
    return this.db.list("equipments").push(obj);
  }

  public updateEquipment(key: string, obj: any) {
    return this.db.list("equipments").set(key, obj.value);
  }

  public deleteEquipment(obj) {
    return this.db.list("equipments").remove(obj.key);
  }

  public getWarranty() {
    return this.db
      .list("/warranties")
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, value: c.payload.val() }))
        )
      );
  }

  public createWarranty(obj: any) {
    return this.db.list("warranties").push(obj);
  }

  public updateWarranty(key: string, obj: any) {
    return this.db.list("warranties").set(key, obj.value);
  }
}
