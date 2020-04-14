import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EquipmentComponent } from "./equipment/equipment.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Angular Material
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatBottomSheetModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule,
  MatExpansionModule,
} from "@angular/material";

//Angular Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { AddEquipmentDialogComponent } from "./add-equipment-dialog/add-equipment-dialog.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, EquipmentComponent, AddEquipmentDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatExpansionModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  entryComponents: [AddEquipmentDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
