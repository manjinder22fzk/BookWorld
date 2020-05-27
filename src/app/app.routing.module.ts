import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthorBooksComponent } from './components/author-books/author-books.component';
import { CategoryBooksComponent } from './components/category-books/category-books.component';
import { SignInComponent } from './components/login/sign-in.component';
import { SignUpComponent } from './components/register/sign-up.component'
import { BuyComponent } from './components/buy/buy.component'
import { AuthGuard } from './guards/auth.guard';

const routes : Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'authorBooks/:author',component:AuthorBooksComponent},
    {path:'categoryBooks/:category',component:CategoryBooksComponent},
    {path:'login',component:SignInComponent},
    {path:'register',component:SignUpComponent},
    {path:'buy/:name',component:BuyComponent, canActivate:[AuthGuard]}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []

})

export class AppRoutingModule { }
