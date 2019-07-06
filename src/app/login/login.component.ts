import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import{Hero} from '../hero';
import HEROES from '../../assets/ser.json';
import {Router} from '@angular/router';
const hero=(<any>HEROES);
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login : any;

  constructor(private router:Router) { }

  ngOnInit() {
    
    
  }
  onSubmitTemplateBased(f){
    for(let h of hero)
    {

      if(h.id==f.value.uname && h.password==f.value.psw){
        this.router.navigate(['/info']);
      }
    }



  }

}
