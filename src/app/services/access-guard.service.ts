import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router'
import { UserService } from '../services/user.service'
@Injectable({
  providedIn: 'root'
})
export class AccessGuardService  {

  
  constructor(private userService:UserService) { }
}
