import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsertComponent} from './insert/insert.component';
import {EditComponent} from './edit/edit.component';
import {DeleteComponent} from './delete/delete.component';


const routes: Routes = [
  {path: '', redirectTo: 'insert', pathMatch: 'full'},
  {path: 'insert', component: InsertComponent},
  {path: 'edit', component: EditComponent},
  {path: 'delete', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
