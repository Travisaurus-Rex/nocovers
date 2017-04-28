import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

	genres: Array<string>;

  constructor(
  		public bookService: BookService
  	) { }

  ngOnInit() {
  	this.bookService.getGenres()
  		.subscribe(
  				genres => this.genres = genres,
  				error => console.log(error)
  			);
  }

}
