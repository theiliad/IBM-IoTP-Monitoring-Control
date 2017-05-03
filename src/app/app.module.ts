import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppComponent }         from './app.component';
import { HeaderComponent }      from './components/header/header.component';
import { SidebarComponent }     from './components/sidebar/sidebar.component'
import { DevicesComponent }     from './components/devices/devices.component';
import { RulesComponent }       from './components/rules/rules.component';
import { routing }              from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
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