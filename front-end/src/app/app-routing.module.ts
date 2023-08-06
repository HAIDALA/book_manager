import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import {BookListComponent} from "./book-list/book-list.component";


const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book/:id', component: BookComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
