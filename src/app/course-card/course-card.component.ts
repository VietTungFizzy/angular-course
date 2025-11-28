import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: false
})
export class CourseCardComponent implements OnInit, AfterViewInit {

  @Input({
    required: true
  })
  course: Course;

  // @Input({
  //   required: true
  // })
  @Input()
  index: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent, { read: ElementRef })
  image: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.image)
  }

  ngOnInit(): void {

  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("Card component - button clicked...");

    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if(this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyles() {
    return { 'background-image': 'url(' + this.course.iconUrl + ')' };
  }
}
