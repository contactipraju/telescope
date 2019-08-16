/* Angular Modules */
import { NgModule }                from '@angular/core';
import { FormsModule }             from '@angular/forms';
import { RouterModule }            from '@angular/router';
import { BrowserModule }           from '@angular/platform-browser';
import { HttpClientModule }        from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Third-party Modules */
import { ModalModule }             from 'ngx-bootstrap/modal';

/* Routing Module */
import { AppRoutingModule }        from './app-routing.module';

import { StoreDevtoolsModule }     from '@ngrx/store-devtools';
import { environment }             from 'src/environments/environment';

/* App Modules */
import { EventsModule }            from './events/events.module';

/* App Component */
import { AppComponent }            from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EventsModule,
    StoreDevtoolsModule.instrument(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
