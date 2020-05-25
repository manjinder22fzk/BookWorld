import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

errorMessage: string;
successMessage: string;
userName: string;
password: string;


  constructor(private userService:UserService) { }

  verify(){
    this.errorMessage = null;
    this.successMessage = null;
    this.userService.getUser(this.userName,this.password).subscribe(result=>{
      if(result){
        this.successMessage="User logged in successfully"
      }
      else{
        this.errorMessage="User Authentication Failed"
      }
    })
  }

  ngOnInit() {
  }

}
