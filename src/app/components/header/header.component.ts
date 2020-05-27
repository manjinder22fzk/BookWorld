import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authors:string[];
  categories:string[];

  constructor(
    private bookService:BookService,    
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

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

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success', timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }

}
