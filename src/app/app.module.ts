/* Angular Modules */
import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { RouterModule }             from '@angular/router';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpClientModule }         from '@angular/common/http';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

/* Angular/Material Modules */
import { MatToolbarModule } from '@angular/material';
import { MatIconModule }    from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatListModule }    from '@angular/material';
import { MatButtonModule }  from '@angular/material';

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
import { HomeComponent }      from './pages/home/home.component';
import { EventsComponent }    from './pages/events/events.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { NewsComponent }      from './pages/news/news.component';
import { PeopleComponent }    from './pages/people/people.component';
import { AdminComponent }     from './pages/admin/admin.component';

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
    YearTableComponent,
    YearCalendarComponent,
    CalendarViewComponent,
    MultiselectListComponent,
    EditSeriesComponent,
    EditEpisodeComponent,
    TableViewPeopleComponent,
    TableViewSeriesComponent,
    TableViewEpisodesComponent,
    EditUserComponent,
    HomeComponent,
    EventsComponent,
    ResourcesComponent,
    NewsComponent,
    PeopleComponent,
    AdminComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, EventEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router'}),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home',      component: HomeComponent },
      { path: 'events',    component: EventsComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'news',      component: NewsComponent },
      { path: 'people',    component: PeopleComponent },
      { path: 'admin',     component: AdminComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]),
    BrowserAnimationsModule
  ],
  exports: [
    AppComponent
  ],
  providers: [EventService, UserService],
  entryComponents: [EditUserComponent, EditSeriesComponent, EditEpisodeComponent, MultiselectListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
