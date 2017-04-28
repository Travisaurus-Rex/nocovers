import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  books: Array<Book>;

  constructor(
  		public bookService: BookService
  	) { }

  ngOnInit() {

  	this.bookService.getRecent()
  		.subscribe(
  			books => this.books = books,
  			error => console.log(error)
  		);
  }

}


