import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorBooksComponent } from './author-books/author-books.component';
import { CategoryBooksComponent } from './category-books/category-books.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component'
import { BuyComponent } from './buy/buy.component'

const routes : Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'authorBooks/:author',component:AuthorBooksComponent},
    {path:'categoryBooks/:category',component:CategoryBooksComponent},
    {path:'signIn',component:SignInComponent},
    {path:'signUp',component:SignUpComponent},
    {path:'buy',component:BuyComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []

})

export class AppRoutingModule { }
