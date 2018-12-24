import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from '../component/app.component';
import { DetailsComponent }  from '../details/details.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, DetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
