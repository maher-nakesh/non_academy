import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { ArticleComponent } from './pages/article/article.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { CourseInfoComponent } from './pages/course-info/course-info.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'courses',component:CoursesComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'news',component:NewsComponent},
  {path:'artical',component:ArticleComponent},
  {path:'teachers',component:TeachersComponent},
  {path:'courseinfo/:id',component:CourseInfoComponent},
  {path:'teacher_info',component:CardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
