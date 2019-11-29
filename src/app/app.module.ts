import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListCardComponent } from './list-card/list-card.component';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect'
import { AppService } from './app.service';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterComponent,
    DashboardComponent,
    ListCardComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MultiselectDropdownModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
