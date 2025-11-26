import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;

    title = COURSES[0].description;

    course = COURSES[0];

    price = 9.991234;

    rate = 0.67;

    startDate = new Date(2000, 0, 1);

    performPrefetch: boolean = false;

    display: boolean = false;

    @ViewChild('cardRef1', { read: ElementRef })
    card1: CourseCardComponent;

    @ViewChild('courseImage')
    containerRef: ElementRef;

    @ViewChildren(CourseCardComponent, { read: ElementRef })
    cards: QueryList<CourseCardComponent>;

    constructor() {
    }

    onCourseSelected(course: Course) {
        // console.log("App component - click event bubbled...", course)
    }

    trackCourse(index: number, course: Course) {
        return course.id;
    }

    onPrefetch() {
        this.performPrefetch = true;
    }

    onDisplay() {
        this.display = true;
    }

    ngAfterViewInit(): void {
        this.cards.changes.subscribe(
            cards => console.log(cards)
        );
    }

    onCoursesEdited() {
        this.courses.push(
            {
                id: 1,
                description: "Angular Core Deep Dive",
                iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
                longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
                category: 'INTERMEDIATE',
                lessonsCount: 10
            }
        )
    }
}
