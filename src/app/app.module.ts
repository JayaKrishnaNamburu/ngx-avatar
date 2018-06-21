import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileImageModule } from './modules/profile-image/profile-image.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProfileImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
