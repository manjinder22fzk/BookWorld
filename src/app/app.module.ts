import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule, } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service'
import { ValidateService } from './services/validate.service';
import { BookService } from './services/book.service';
import { AuthorBooksComponent } from './components/author-books/author-books.component';
import { CategoryBooksComponent } from './components/category-books/category-books.component';
import { SignInComponent } from './components/login/sign-in.component';
import { SignUpComponent } from './components/register/sign-up.component'
import { AppRoutingModule } from './app.routing.module';
import { BuyComponent } from './components/buy/buy.component';

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
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot()    
  ],
  providers: [BookService,AuthService,ValidateService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
