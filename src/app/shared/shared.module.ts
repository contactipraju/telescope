/* Angular Modules */
import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpClientModule }         from '@angular/common/http';
import { HttpClientJsonpModule }    from '@angular/common/http';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { FilterService } from './services/nobel-filter.service';

import { InputStringComponent }  from './components/input-string/input-string.component';
import { ButtonGroupComponent }  from './components/button-group/button-group.component';
import { SortButtonComponent }   from './components/sort-button/sort-button.component';

@NgModule({
  declarations: [
    InputStringComponent,
    ButtonGroupComponent,
    SortButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ButtonsModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    InputStringComponent,
    ButtonGroupComponent,
    SortButtonComponent
  ],
  providers: [FilterService],
  entryComponents: []
})
export class SharedModule { }
