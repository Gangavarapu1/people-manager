import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { PeopleEditComponent } from './pages/people-edit/people-edit.component';
import { PeopleDeleteComponent } from './pages/people-delete/people-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleEditComponent,
    PeopleDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
