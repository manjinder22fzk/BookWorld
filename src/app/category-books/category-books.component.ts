import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from '../shared/book'

@Component({
  selector: 'app-category-books',
  templateUrl: './category-books.component.html',
  styleUrls: ['./category-books.component.css']
})
export class CategoryBooksComponent implements OnInit {

  category:string;
  Books:Book[];

  constructor( private bookService:BookService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.category=params.get('category');
      this.bookService.getBooksbyCategory(this.category).subscribe(books=>{
        this.Books=books;
      })
    })
  }

}
