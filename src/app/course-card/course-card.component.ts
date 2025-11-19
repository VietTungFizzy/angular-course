import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: false
})
export class CourseCardComponent implements OnInit {

  @Input({
    required: true
  })
  course: Course;

  @Input({
    required: true
  })
  index: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() {}

  ngOnInit(): void {
    
  }

  onCourseViewed() {
    console.log("Card component - button clicked...");

    this.courseEmitter.emit(this.course);
  }
}
