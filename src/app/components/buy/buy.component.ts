import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  name:string;
  constructor(private authService:AuthService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name')
      this.authService.buyBook(this.name).subscribe(result=>{
        console.log("result");
      })

    })
  }

}
