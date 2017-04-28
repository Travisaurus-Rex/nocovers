import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-genre-single',
  templateUrl: './genre-single.component.html',
  styleUrls: ['./genre-single.component.css']
})
export class GenreSingleComponent implements OnInit {

  books: Array<Book>;
  genre: string;

  constructor(
  		public bookService: BookService,
  		public activatedRoute: ActivatedRoute
  	) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe((params: Params) => {
  		this.genre = params['genre'];
  		this.bookService.getBooksInGenre(this.genre)
  			.subscribe(
  					books => this.books = books,
  					error => console.log(error)
  				)
  	})
  }

}
