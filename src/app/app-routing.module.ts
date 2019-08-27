import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './components/pages/home/home.component';
import { NewsComponent }      from './components/pages/news/news.component';
import { EventsComponent }    from './components/pages/events/events.component';
import { ArchivesComponent }  from './components/pages/archives/archives.component';
import { ResourcesComponent } from './components/pages/resources/resources.component';
import { PeopleComponent }    from './components/pages/people/people.component';
import { AdminComponent }     from './components/pages/admin/admin.component';

const routes: Routes = [
  { path: 'home',          component: HomeComponent },
  { path: 'newsletter',    component: NewsComponent },
//  { path: 'events',        component: EventsComponent },
  { path: 'archives',      component: ArchivesComponent },
  { path: 'knowledge-hub', component: ResourcesComponent },
//  { path: 'team',          component: PeopleComponent },
  { path: 'admin',         component: AdminComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
