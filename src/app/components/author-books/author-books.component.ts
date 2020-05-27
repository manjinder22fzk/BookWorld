import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from '../../shared/book'

@Component({
  selector: 'app-author-books',
  templateUrl: './author-books.component.html',
  styleUrls: ['./author-books.component.css']
})
export class AuthorBooksComponent implements OnInit {

  Books:Book[];
  author:string;
  
  constructor(
    private bookService:BookService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.author=params.get('author');
      this.bookService.getBooksbyAuthor(this.author).subscribe(books=>{
        this.Books=books;
      })
    })
  }

}
