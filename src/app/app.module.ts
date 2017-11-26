import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AnimationModule } from './animations/animation.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
