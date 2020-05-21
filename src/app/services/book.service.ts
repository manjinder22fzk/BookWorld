import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../shared/book'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  url='http://localhost:3000/books'
  constructor(private http:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.url);
  }
}
