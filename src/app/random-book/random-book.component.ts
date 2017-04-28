import { 
  Component, 
  OnInit, 
} from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-random-book',
  templateUrl: './random-book.component.html',
  styleUrls: ['./random-book.component.css'],
})

export class RandomBookComponent implements OnInit {

  state: string = 'in';
	books: Array<Book>;
	book: Book;

  constructor(
  		public bookService: BookService
  	) { }

  ngOnInit() {
  	this.bookService.getBooks()
  			.subscribe(
  				books => {
  					this.books = books;
  					this.pickRandom();
  				},
  				error => console.log(error)
  			);
  }

  pickRandom(): void {
  	this.book = this.books[Math.floor(Math.random() * this.books.length)];
  }

}
