import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EquipmentComponent } from "./equipment/equipment.component";

const routes: Routes = [
  { path: "equipment", component: EquipmentComponent },
  { path: "", redirectTo: "/equipment", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
