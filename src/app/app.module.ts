import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppComponent }         from './app.component';
import { HeaderComponent }      from './header/header.component';
import { DevicesComponent }     from './devices/devices.component';
import { RulesComponent }       from './rules/rules.component';
import { routing }              from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DevicesComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }