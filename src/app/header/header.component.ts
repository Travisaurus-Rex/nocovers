import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  genres: Array<string>;

  constructor(
  		private bookService: BookService
  ) { }

  ngOnInit() {
  	this.bookService.getGenres()
  						.subscribe(
  							genres => this.genres = genres,
  							error => console.log(error)
  						);
  }

}
