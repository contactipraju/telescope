/* Angular Modules */
import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { RouterModule }             from '@angular/router';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpClientModule }         from '@angular/common/http';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

/* Third-party Modules */
import { ModalModule }              from 'ngx-bootstrap/modal';

/* Routing Module */
import { AppRoutingModule }         from './app-routing.module';

import { environment }              from 'src/environments/environment';

/* Ngrx Modules, for Store */
import { StoreModule }                 from '@ngrx/store';
import { EffectsModule }               from '@ngrx/effects';
import { StoreDevtoolsModule }         from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

/* Store Reducers */
import { appReducers }     from './store/reducers/app.reducers';

/* Store Effects */
import { UserEffects }     from './store/effects/user.effects';
import { EventEffects }    from './store/effects/event.effects';

/* Services */
import { UserService }     from './services/user.service';
import { EventService }    from './services/event.service';

/* App Components */
import { AppComponent }    from './app.component';

/* Page Components */
import { AdminComponent }  from './pages/admin/admin.component';
import { PeopleComponent } from './pages/people/people.component';
import { EventsComponent } from './pages/events/events.component';

/* Shared Components */
import { CalendarViewComponent }      from './shared/calendar-view/calendar-view.component';
import { MultiselectListComponent }   from './shared/multiselect-list/multiselect-list.component';

import { YearTableComponent }         from './shared/year-table/year-table.component';
import { YearCalendarComponent }      from './shared/year-calendar/year-calendar.component';

import { EditUserComponent }          from './shared/edit-user/edit-user.component';
import { EditSeriesComponent }        from './shared/edit-series/edit-series.component';
import { EditEpisodeComponent }       from './shared/edit-episode/edit-episode.component';

import { TableViewPeopleComponent }   from './shared/table-view-people/table-view-people.component';
import { TableViewSeriesComponent }   from './shared/table-view-series/table-view-series.component';
import { TableViewEpisodesComponent } from './shared/table-view-episodes/table-view-episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PeopleComponent,
    EventsComponent,
    YearTableComponent,
    YearCalendarComponent,
    CalendarViewComponent,
    MultiselectListComponent,
    EditSeriesComponent,
    EditEpisodeComponent,
    TableViewPeopleComponent,
    TableViewSeriesComponent,
    TableViewEpisodesComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, EventEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router'}),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: 'admin',  component: AdminComponent },
      { path: 'events', component: EventsComponent },
      { path: 'people', component: PeopleComponent },
      { path: '', redirectTo: '/events', pathMatch: 'full' }
    ])
  ],
  exports: [
    AppComponent
  ],
  providers: [EventService, UserService],
  entryComponents: [EditUserComponent, EditSeriesComponent, EditEpisodeComponent, MultiselectListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
