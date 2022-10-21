import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';
import { Observable } from 'rxjs';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  selectedCourse:Course;

  Courses:Course[];

  readonly Api_url='http://localhost:3000/course'



  constructor(private http:HttpClient) {
    this.selectedCourse=new Course();

   }
  getCourses(){
    return this.http.get(this.Api_url);
  }
  getOneCourse(_id:string):Observable<Course> {
    return this.http.get<Course>(this.Api_url+'/'+_id);
  }


}
