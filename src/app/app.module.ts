import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ListArticleComponent } from './list-article/list-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateArticleComponent,
    UpdateArticleComponent,
    ListArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
