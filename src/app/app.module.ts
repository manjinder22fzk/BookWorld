import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';


import { BookService } from './services/book.service';
import { AccessGuardService } from './services/access-guard.service';
import { AuthorBooksComponent } from './author-books/author-books.component';
import { CategoryBooksComponent } from './category-books/category-books.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component'

import { AppRoutingModule } from './app.routing.module';
import { BuyComponent } from './buy/buy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthorBooksComponent,
    CategoryBooksComponent,
    SignInComponent,
    SignUpComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [BookService,AccessGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
