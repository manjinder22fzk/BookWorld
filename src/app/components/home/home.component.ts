import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service'
import { Book } from '../../shared/book'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books=>{
      this.books=books;
      console.log(this.books);
    })
  
  }

}
