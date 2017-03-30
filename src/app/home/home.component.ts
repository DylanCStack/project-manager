import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from './../project';
import { ProjectService } from './../project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

// declare var firebase: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService]
})
export class HomeComponent implements OnInit {
  projects: FirebaseListObservable <any[]>;
  // selectedProject = null;


  constructor(
    private router: Router,
    private projectService: ProjectService) { }

    getProjects(): void {
      this.projects = this.projectService.getProjects();

    }


  ngOnInit(): void {
    // this.fbGetData();
    this.getProjects();
  }

  addProject(newProject: Project){
    this.projects.push(newProject);
    // console.log(newProject.$key)
  }

    goToDetailPage(clickedProject: Project) {
      console.log(clickedProject);
      this.router.navigate(['project', clickedProject.$key]);
    }






}
