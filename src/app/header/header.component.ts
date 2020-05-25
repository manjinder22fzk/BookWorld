import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authors:string[];
  categories:string[];

  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.bookService.getAuthors().subscribe(authors=>{
      console.log(authors);
      this.authors=authors;
    });
    this.bookService.getCategories().subscribe(categories=>{
      console.log(categories)
      this.categories=categories;
    })
  }

}
