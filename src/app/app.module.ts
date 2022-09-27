import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { CourseInfoComponent } from './pages/course-info/course-info.component';
import { ArticleComponent } from './pages/article/article.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { CardComponent } from './components/card/card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    CourseInfoComponent,
    ArticleComponent,
    TeachersComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
