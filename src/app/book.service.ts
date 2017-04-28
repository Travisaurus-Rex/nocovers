import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Book } from './book';

// rxjs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {

  url: string = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  getBook(title): Observable<Book[]> {
  	return this.http.get(`${this.url}/book/${title}`)
  		.map((res:Response) => res.json())
  		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getBooks(): Observable<Book[]> {
  	return this.http.get(`${this.url}/all`)
  		.map((res:Response) => res.json())
  		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getRecent(): Observable<Book[]> {
    return this.http.get(`${this.url}/recent`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  getGenres(): Observable<string[]> {
    return this.http.get(`${this.url}/genre`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getBooksInGenre(genre): Observable<Book[]> {
    return this.http.get(`${this.url}/genre/${genre}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  
}
