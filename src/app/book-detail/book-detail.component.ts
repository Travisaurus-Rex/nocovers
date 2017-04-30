import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Params } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  animations: [
    trigger('revealCover', [
      state('reveal', style({
        transform: 'rotateY(-180deg)'
      })),
      transition('hidden => reveal', animate(600, keyframes([
        style({transform: 'rotateY(0deg)', offset: 0}),
        style({transform: 'rotateY(25deg)', offset: 0.45}),
        style({transform: 'rotateY(-205deg)', offset: 0.66}),
        style({transform: 'rotateY(-180deg)', offset: 1.0})
      ])))
    ])
  ]
})
export class BookDetailComponent implements OnInit {

  book: Book;
  state: string = 'hidden';

  constructor(
    public bookService: BookService, 
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

  	this.activatedRoute.params.subscribe((params:Params) => {
      let title = params['title'];
      this.bookService.getBook(title)
            .subscribe(
              books => this.book = books[0],
              error => console.log(error)
            ); 
    })
  	
  }

  revealCover() {
    this.state = 'reveal';
  }

}
