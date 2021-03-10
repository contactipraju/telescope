/* Angular Modules */
import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { RouterModule }     from '@angular/router';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }      from '@angular/forms';

/* Modules */
import { SharedModule } from '@app/shared/shared.module';

/* Services */
import { NobelsService }      from './services/nobels.service';

/* Filters */
import { AreaPipe }         from './pipes/area.pipe';
import { GenderPipe }       from './pipes/gender.pipe';
import { SortOnPipe }       from './pipes/sort-on.pipe';
import { LaureateNamePipe } from './pipes/laureate-name.pipe';

/* Components */
import { NobelsComponent }       from './components/nobels/nobels.component';
import { LaureateCardComponent } from './components/laureate-card/laureate-card.component';
import { NobelPrizeComponent }   from './components/nobel-prize/nobel-prize.component';
import { NobelFilterComponent }  from './components/nobel-filter/nobel-filter.component';

@NgModule({
  declarations: [
    NobelsComponent,
    LaureateCardComponent,
    NobelPrizeComponent,
    NobelFilterComponent,
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
    RouterModule.forChild([]),
    SharedModule
  ],
  exports: [
    NobelsComponent
  ],
  providers: [NobelsService],
})
export class NobelsModule { }
