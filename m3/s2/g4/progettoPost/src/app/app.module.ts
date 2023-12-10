import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePostComponent } from './posts/active-post/active-post.component';
import { PostInattiviComponent } from './posts/inactive-post/inactive-post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { ActiveCardComponent } from './cards/active-card/active-card.component';
import { InactiveCardComponent } from './cards/inactive-card/inactive-card.component';
import { UpperCaseTextPipe } from './pipes/upper-case-text.pipe';
import { HighlightTextDirective } from './directivers/highlight-text.directive';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivePostComponent,
    PostInattiviComponent,
    NavbarComponent,
    HomeComponent,
    CardsComponent,
    ActiveCardComponent,
    InactiveCardComponent,
    UpperCaseTextPipe,
    HighlightTextDirective,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
