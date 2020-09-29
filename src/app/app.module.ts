import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { LikedReposComponent } from './components/liked-repos/liked-repos.component';
import { FilterPipe } from './pipes/filter.pipe';

const routes=[
  {path: 'home', component:InputFieldComponent},
  {path: 'likedRepos', component:LikedReposComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputFieldComponent,
    LikedReposComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
