import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'myapp';
  constructor(private router: Router) { }

  menucheck(){
  //   console.log('sdfghj');
  //  console.log(this.router.url);    
   if(this.router.url=='/')
   return true;
    
  }
}
