import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }        from './components/pages/home/home.component';
import { NewsComponent }        from './components/pages/news/news.component';
import { PostsComponent }       from './components/pages/posts/posts.component';
import { QAndAComponent }       from './components/pages/q-and-a/q-and-a.component';
import { ArchivesComponent }    from './components/pages/archives/archives.component';
import { ResourcesComponent }   from './components/pages/resources/resources.component';
import { NobelsPageComponent }  from './components/pages/nobels-page/nobels-page.component';
import { EventsComponent }      from './components/pages/events/events.component';
import { PeopleComponent }      from './components/pages/people/people.component';
import { AdminComponent }       from './components/pages/admin/admin.component';

const routes: Routes = [
  { path: 'home',       component: HomeComponent,       data: { showNav: false } },
  { path: 'newsletter', component: NewsComponent,       data: { showNav: false } },
  { path: 'all_posts',  component: QAndAComponent,      data: { showNav: false } },
  { path: 'resources',  component: ResourcesComponent,  data: { showNav: false } },
  { path: 'media',      component: ArchivesComponent,   data: { showNav: false } },
  { path: 'admin',      component: AdminComponent,      data: { showNav: false } },

  { path: 'reading/nobels',  component: NobelsPageComponent,  data: { showNav: false } },

  { path: 'general_science',                  component: PostsComponent, data: { showNav: true } },
  { path: 'general_science/:subcategory',     component: PostsComponent, data: { showNav: false } },
  { path: 'general_science/:subcategory/:id', component: PostsComponent, data: { showNav: false } },

  { path: 'life_sciences',                    component: PostsComponent, data: { showNav: true } },
  { path: 'life_sciences/:subcategory',       component: PostsComponent, data: { showNav: false } },
  { path: 'life_sciences/:subcategory/:id',   component: PostsComponent, data: { showNav: false } },

  { path: 'social_sciences',                  component: PostsComponent, data: { showNav: true } },
  { path: 'social_sciences/:subcategory',     component: PostsComponent, data: { showNav: false } },
  { path: 'social_sciences/:subcategory/:id', component: PostsComponent, data: { showNav: false } },

  { path: 'miscellaneous',                    component: PostsComponent, data: { showNav: true } },
  { path: 'miscellaneous/:subcategory',       component: PostsComponent, data: { showNav: false } },
  { path: 'miscellaneous/:subcategory/:id',   component: PostsComponent, data: { showNav: false } },

  { path: 'pseudoscience',                    component: PostsComponent, data: { showNav: true } },
  { path: 'pseudoscience/:subcategory',       component: PostsComponent, data: { showNav: false } },
  { path: 'pseudoscience/:subcategory/:id',   component: PostsComponent, data: { showNav: false } },

//  { path: 'events',        component: EventsComponent },
//  { path: 'team',          component: PeopleComponent },
  { path: '', redirectTo: '/all_posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
