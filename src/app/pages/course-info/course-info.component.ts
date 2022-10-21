import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../service/course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
course_id : string='';
courseDetails:any;


  constructor(private activatedRoute:ActivatedRoute,private courseService:CourseService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data=>{
      this.course_id=data['id'];
    })

    if(this.course_id){ this.courseService.getOneCourse(this.course_id).subscribe(data=>{
      this.courseDetails=data;
    })}

  }

}
