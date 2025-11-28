import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: false
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input({
    required: true
  })
  course: Course;

  @Input()
  noImageTpl: TemplateRef<any>;

  // @Input({
  //   required: true
  // })
  @Input()
  index: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<ElementRef>;

  constructor() {}

  ngAfterContentInit(): void {
    console.log(this.images)
  }

  ngAfterViewInit(): void {
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
