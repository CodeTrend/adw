import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
// import { MaterialModule } from './material/material.module';
// import { FlexLayoutModule } from "@angular/flex-layout";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule
    // MaterialModule,
    // FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
