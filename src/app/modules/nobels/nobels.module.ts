/* Angular Modules */
import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { RouterModule }     from '@angular/router';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }      from '@angular/forms';

import { ButtonsModule }    from 'ngx-bootstrap/buttons';

/* Services */
import { NobelsService }      from './nobels.service';
import { NobelFilterService } from './nobel-filter/nobel-filter.service';

/* Filters */
import { AreaPipe }         from './nobel-filter/pipes/area.pipe';
import { GenderPipe }       from './nobel-filter/pipes/gender.pipe';
import { SortOnPipe }       from './nobel-filter/pipes/sort-on.pipe';
import { LaureateNamePipe } from './nobel-filter/pipes/laureate-name.pipe';

/* Components */
import { NobelsComponent }       from './nobels.component';
import { LaureateCardComponent } from './laureate-card/laureate-card.component';
import { NobelPrizeComponent }   from './laureate-card/nobel-prize/nobel-prize.component';
import { NobelFilterComponent }  from './nobel-filter/nobel-filter.component';
import { InputStringComponent }  from './nobel-filter/input-string/input-string.component';
import { ButtonGroupComponent }  from './nobel-filter/button-group/button-group.component';
import { SortButtonComponent }   from './nobel-filter/sort-button/sort-button.component';

@NgModule({
  declarations: [
    NobelsComponent,
    LaureateCardComponent,
    NobelPrizeComponent,
    NobelFilterComponent,
    InputStringComponent,
    ButtonGroupComponent,
    SortButtonComponent,
    AreaPipe,
    GenderPipe,
    SortOnPipe,
    LaureateNamePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ButtonsModule.forRoot(),
    RouterModule.forChild([
      { path: 'reading/nobels', component: NobelsComponent }
    ])
  ],
  exports: [
    NobelsComponent
  ],
  providers: [NobelsService, NobelFilterService],
})
export class NobelsModule { }
