import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { PeopleEditComponent } from './pages/people-edit/people-edit.component';
import { PeopleDeleteComponent } from './pages/people-delete/people-delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', component: PeopleListComponent },
  { path: 'people/edit/:id', component: PeopleEditComponent },
  { path: 'people/delete/:id', component: PeopleDeleteComponent },
  { path: '**', redirectTo: 'people' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
