import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

    courses = COURSES;

    title = COURSES[0].description;

    course = COURSES[0];

    price = 9.991234;

    rate = 0.67;

    startDate = new Date(2000, 0, 1);

    onCourseSelected(course: Course) {
        console.log("App component - click event bubbled...", course)
    }

    trackCourse(index: number, course: Course) {
        return course.id;
    }
}
