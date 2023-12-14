import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { MelomanosCatalogueComponent } from './melomanos-catalogue/melomanos-catalogue.component';
import { MelomanosContactComponent } from './melomanos-contact/melomanos-contact.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentListComponent,
    CartComponent,
    MelomanosCatalogueComponent,
    MelomanosContactComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
