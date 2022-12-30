import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpectacleComponent } from './spectacle/spectacle.component';
import { HttpClientModule } from '@angular/common/http';
import { AddSpectacleComponent } from './add-spectacle/add-spectacle.component';
import { UpdateSpectacleComponent } from './update-spectacle/update-spectacle.component';
@NgModule({
  declarations: [
    AppComponent,
    SpectacleComponent,
    AddSpectacleComponent,
    UpdateSpectacleComponent
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
