import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  selectCourse=Course;
  Courses:Course[];
  readonly Api_url='http://localhost:3000/course'



  constructor(private http:HttpClient) { }
  getCourses(){
    return this.http.get(this.Api_url);
  }

  postCourse(Course:Course){
    return this.http.post(this.Api_url,Course);
  }

  putCourse(course:Course){
    return this.http.put(this.Api_url+'/${Course._id}',course);
  }
  deleteCourse(_id:string){
    return this.http.delete(this.Api_url+'/${_id}');
  }
}
