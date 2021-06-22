import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainViewComponent } from './components/main-view/main-view.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SectionShortenComponent } from './components/main-view/sections/section-shorten/section-shorten.component';
//Material


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    SectionShortenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
