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

  getAuthors():Observable<string[]>{
    return this.http.get<string[]>(this.url+"/authors")
  }
  getBooksbyAuthor(author:string):Observable<Book[]>{
    return this.http.get<Book[]>(this.url+"/authors/"+author);
  }

  getCategories():Observable<any[]>{
    return this.http.get<any[]>(this.url+"/categories")
  }
  getBooksbyCategory(category:string):Observable<Book[]>{
    return this.http.get<Book[]>(this.url+"/categories/"+category);
  }
}
