import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import { Subscriber } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    BrowserDynamicTestingModule,
    HttpClientModule  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
