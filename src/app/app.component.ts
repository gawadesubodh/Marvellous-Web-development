
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.color{
    background-color:  blue
  }`]
})

export class AppComponent   implements OnInit {
  title = 'Marvellous Infosystems';
  Name='Marvellous';
InputName="Button not click";

  ngOnInit(){
     
      
  }
  getalert  () {

    console.log('You have in function');
    
  }
  buttonClick(){
    this.InputName="Button click";
  }

}
