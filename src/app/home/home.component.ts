import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from './../project';
import { ProjectService } from './../project.service';
// declare var firebase: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: Project[];
  selectedProject = null;

  constructor(private router: Router,
    private projectService: ProjectService) { }

    getProjects(): void {
      this.projectService.getProjects().then(projects => this.projects = projects);
    }


  ngOnInit(): void {
    // this.fbGetData();
    this.getProjects();
  }

  addProject(newProject: Project){
    this.projects.push(newProject);
    console.log(newProject.id)
  }

  editProject(clickedProject) {
    this.selectedProject = clickedProject;
  }

  finishedEditing() {
    this.selectedProject = null;
  }

  goToDetailPage(clickedProject: Project) {
    this.router.navigate(['project', clickedProject.id]);
  }
  // projects = [];
  //
  // fbGetData() {
  //   firebase.database().ref('/projects/').on('child_added', (snapshot) => {
  //     this.projects.push(snapshot.val())
  //   })
  // }
  // fbSaveProject(){
  //   firebase.database().ref("/projects/").push{"put properties of object here"}
  // }

}
