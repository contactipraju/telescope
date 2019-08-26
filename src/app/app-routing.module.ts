import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './pages/home/home.component';
import { NewsComponent }      from './pages/news/news.component';
import { EventsComponent }    from './pages/events/events.component';
import { ArchivesComponent }  from './pages/archives/archives.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { PeopleComponent }    from './pages/people/people.component';
import { AdminComponent }     from './pages/admin/admin.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
