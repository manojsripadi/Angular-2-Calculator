import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<br><label>Please Enter Your Name Genius</label><input type="text" [(ngModel)]="name"> 
                <h2> Welcome to <img src="https://user-images.githubusercontent.com/1560278/27637937-cb4b9b24-5c11-11e7-949b-15c1e4cdb53c.gif" alt="Smiley face" align="middle" width="200" height="200"> Calculator App <b>{{name}}</b></h2>
               <my-sample></my-sample>`,
  styles:[
    `h2{
      color:blue
    }`
  ]
})
export class AppComponent { 
  public name;
}

