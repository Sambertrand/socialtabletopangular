import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JoueurComponent } from './joueur/joueur.component';
import { MyTableComponent } from './my-table/my-table.component';
import { PersonnageComponent } from './personnage/personnage.component';

@NgModule({
  declarations: [
    AppComponent,
    JoueurComponent,
    MyTableComponent,
    PersonnageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
