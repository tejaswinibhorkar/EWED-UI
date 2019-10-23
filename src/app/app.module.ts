import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EwedComponent } from './ewed/ewed.component';
import { EwedService } from './ewed/ewed.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EwedInfoComponent } from './ewedInfo/ewedInfo.component';
import { EwedInfoService } from './ewedInfo/ewedInfo.service';

@NgModule({
  declarations: [
    AppComponent, EwedComponent, EwedInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EwedService, EwedInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
