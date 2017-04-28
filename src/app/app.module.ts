import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { BookService } from './book.service';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { GenreSingleComponent } from './genre-single/genre-single.component';
import { RandomBookComponent } from './random-book/random-book.component';
import { HeaderComponent } from './header/header.component';
import { RecentComponent } from './recent/recent.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'genre',
    component: GenreListComponent
  }, 
  {
    path: 'genre/:genre',
    component: GenreSingleComponent
  },
  {
    path: 'book/:title',
    component: BookDetailComponent
  },
  {
    path: 'recent',
    component: RecentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookDetailComponent,
    GenreListComponent,
    GenreSingleComponent,
    RandomBookComponent,
    HeaderComponent,
    RecentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
