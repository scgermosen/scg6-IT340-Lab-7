import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ 

   ],
  imports: [
    BrowserModule,
    AppComponent,
    //AppRoutingModule,
    //HttpClientModule,
    FormsModule,
    CommonModule 
  ],
  providers: [provideHttpClient()],
  bootstrap: [],
})

export class AppModule { }
