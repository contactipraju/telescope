/* Angular Modules */
import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { RouterModule }             from '@angular/router';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpClientModule }         from '@angular/common/http';
import { HttpClientJsonpModule }    from '@angular/common/http';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

/* Angular/Material Modules */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

/* Third-party Modules */
import { ModalModule }              from 'ngx-bootstrap/modal';
/* import { GridStackModule }          from 'ngx-grid-stack'; TODO: Use lb-gridstack later */
import { ShareModule }              from '@ngx-share/core';
import { ShareService }             from '@ngx-share/core';
import { ShareButtonsModule }       from '@ngx-share/buttons';
import { FontAwesomeModule }        from '@fortawesome/angular-fontawesome';
import { AngularEditorModule }      from '@kolkov/angular-editor';

/* Routing Module */
import { AppRoutingModule }         from './app-routing.module';
import { NobelsModule }             from './modules/nobels/nobels.module';

import { environment }              from 'src/environments/environment';

/* Ngrx Modules, for Store */
import { StoreModule }                 from '@ngrx/store';
import { EffectsModule }               from '@ngrx/effects';
import { StoreDevtoolsModule }         from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, DefaultRouterStateSerializer } from '@ngrx/router-store';

/* Store Reducers */
import { appReducers }     from './store/reducers/app.reducers';

/* Store Effects */
import { AppEffects }      from './app.effects';
import { ConfigEffects }   from './store/effects/config.effects';
import { EventEffects }    from './store/effects/event.effects';
import { PostEffects }     from './store/effects/post.effects';
import { UserEffects }     from './store/effects/user.effects';

/* Services */
import { ConfigService }   from './services/config.service';
import { EventService }    from './services/event.service';
import { PostService }     from './services/post.service';
import { SocialService }   from './services/social.service';
import { UserService }     from './services/user.service';

/* Pipes */
import { SafePipe }        from './pipes/safe.pipe';
import { FilterPipe }      from './pipes/filter.pipe';

/* App Components */
import { AppComponent }    from './app.component';

/* Calendar Components */
import { CalendarViewComponent }      from './components/calendar/calendar-view/calendar-view.component';
import { MultiselectListComponent }   from './components/calendar/multiselect-list/multiselect-list.component';
import { YearCalendarComponent }      from './components/calendar/year-calendar/year-calendar.component';

/* Edit Components */
import { EditEpisodeComponent }       from './components/edit/edit-episode/edit-episode.component';
import { EditPostComponent }          from './components/edit/edit-post/edit-post.component';
import { EditSeriesComponent }        from './components/edit/edit-series/edit-series.component';
import { EditUserComponent }          from './components/edit/edit-user/edit-user.component';

/* Common Components */
import { FooterComponent }            from './components/common/footer/footer.component';

/* Misc Components */
import { LhsComponent }               from './components/misc/lhs/lhs.component';
import { MenuComponent }              from './components/misc/menu/menu.component';
import { ArticleComponent }           from './components/misc/article/article.component';

/* Page Components */
import { HomeComponent }              from './components/pages/home/home.component';
import { NewsComponent }              from './components/pages/news/news.component';
import { PostsComponent }             from './components/pages/posts/posts.component';
import { QAndAComponent }             from './components/pages/q-and-a/q-and-a.component';
import { EventsComponent }            from './components/pages/events/events.component';
import { ArchivesComponent }          from './components/pages/archives/archives.component';
import { ResourcesComponent }         from './components/pages/resources/resources.component';
import { NobelsPageComponent }        from './components/pages/nobels-page/nobels-page.component';
import { PeopleComponent }            from './components/pages/people/people.component';
import { AdminComponent }             from './components/pages/admin/admin.component';

/* Detail-View Components */
import { ViewPostComponent }          from './components/views-detail/view-post/view-post.component';

/* List-View Components */
import { ListViewPeopleComponent }    from './components/views-list/list-view-people/list-view-people.component';
import { ListViewSeriesComponent }    from './components/views-list/list-view-series/list-view-series.component';
import { ListViewPostsComponent }     from './components/views-list/list-view-posts/list-view-posts.component';

/* Table-View Components */
import { TableViewComponent }         from './components/views-table/table-view/table-view.component';
import { TableViewEpisodesComponent } from './components/views-table/table-view-episodes/table-view-episodes.component';
import { TableViewPeopleComponent }   from './components/views-table/table-view-people/table-view-people.component';
import { TableViewSeriesComponent }   from './components/views-table/table-view-series/table-view-series.component';
import { TableViewPostsComponent }    from './components/views-table/table-view-posts/table-view-posts.component';

/* Tile-View Components */
import { TileEpisodeComponent }       from './components/views-tile/tile-episode/tile-episode.component';
import { TileSeriesComponent }        from './components/views-tile/tile-series/tile-series.component';
import { TileUserComponent }          from './components/views-tile/tile-user/tile-user.component';

@NgModule({
  declarations: [
    SafePipe,
    FilterPipe,
    AppComponent,
    HomeComponent,
    EventsComponent,
    ArchivesComponent,
    ResourcesComponent,
    NobelsPageComponent,
    NewsComponent,
    PostsComponent,
    QAndAComponent,
    PeopleComponent,
    AdminComponent,
    FooterComponent,
    LhsComponent,
    MenuComponent,
    ArticleComponent,
    ViewPostComponent,
    CalendarViewComponent,
    MultiselectListComponent,
    YearCalendarComponent,
    EditEpisodeComponent,
    EditPostComponent,
    EditSeriesComponent,
    EditUserComponent,
    ListViewSeriesComponent,
    ListViewPeopleComponent,
    ListViewPostsComponent,
    TableViewComponent,
    TableViewEpisodesComponent,
    TableViewPeopleComponent,
    TableViewSeriesComponent,
    TableViewPostsComponent,
    TileEpisodeComponent,
    TileSeriesComponent,
    TileUserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareModule,
    ShareButtonsModule.withConfig({
      exclude: ['google'],
      gaTracking: true
    }),
    FontAwesomeModule,
//    GridStackModule, TODO: Use lb-gridstack later 
    AngularEditorModule,
    StoreDevtoolsModule.instrument(),
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AppEffects, ConfigEffects, EventEffects, PostEffects, UserEffects]),
    StoreRouterConnectingModule.forRoot({ serializer: DefaultRouterStateSerializer, stateKey: 'router'}),
    ModalModule.forRoot(),
    AppRoutingModule,
    NobelsModule,
    BrowserAnimationsModule
  ],
  exports: [
    AppComponent
  ],
  providers: [ConfigService, EventService, PostService, ShareService, SocialService, UserService],
  entryComponents: [
    EditEpisodeComponent,
    EditPostComponent,
    EditSeriesComponent,
    EditUserComponent,
    MultiselectListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
