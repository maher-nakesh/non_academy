import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/service/course.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers:[CourseService]
})
export class CoursesComponent implements OnInit {

  constructor(public Courseservice:CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }
 getCourses() {
    this.Courseservice.getCourses().subscribe((res) => {
      this.Courseservice.Courses = res as Course[];
      console.log(res);
    });
  }
}
