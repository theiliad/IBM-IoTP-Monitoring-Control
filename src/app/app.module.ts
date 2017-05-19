import { BrowserModule }                  from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform }  from '@angular/core';
import { FormsModule }                    from '@angular/forms';
import { HttpModule, JsonpModule }        from '@angular/http';

// Components
import { AppComponent }         from './app.component';
import { HeaderComponent }      from './components/header/header.component';
import { SidebarComponent }     from './components/sidebar/sidebar.component'
import { DevicesComponent }     from './components/devices/devices.component';
import { StatusComponent }      from './components/status/status.component';

// Services
import { IBMIoTPService }       from './services/iotp/ibmIoTP.service'
import { LiveDataService }      from './services/livedata/liveData.service'

// Pipes
import { OrderBy }              from './pipes/orderby.pipe';

// Routing
import { routing }              from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DevicesComponent,
    StatusComponent,

    // Pipes
    OrderBy
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [
    IBMIoTPService,
    LiveDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }