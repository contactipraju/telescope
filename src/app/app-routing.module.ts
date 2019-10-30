import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }        from './components/pages/home/home.component';
import { NewsComponent }        from './components/pages/news/news.component';
import { PostsComponent }       from './components/pages/posts/posts.component';
import { QAndAComponent }       from './components/pages/q-and-a/q-and-a.component';
import { ArchivesComponent }    from './components/pages/archives/archives.component';
import { ResourcesComponent }   from './components/pages/resources/resources.component';
import { EventsComponent }      from './components/pages/events/events.component';
import { PeopleComponent }      from './components/pages/people/people.component';
import { AdminComponent }       from './components/pages/admin/admin.component';

const routes: Routes = [
  { path: 'home',       component: HomeComponent },
  { path: 'newsletter', component: NewsComponent },
  { path: 'all_posts',  component: QAndAComponent },
  { path: 'resources',  component: ResourcesComponent },
  { path: 'media',      component: ArchivesComponent },

  { path: 'general_science', component: PostsComponent },
  { path: 'social_sciences', component: PostsComponent },
  { path: 'life_sciences',   component: PostsComponent },
  { path: 'miscellaneous',   component: PostsComponent },
  { path: 'pseudoscience',   component: PostsComponent },

//  { path: 'events',        component: EventsComponent },
//  { path: 'team',          component: PeopleComponent },
  { path: 'admin',         component: AdminComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
