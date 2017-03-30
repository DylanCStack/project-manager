import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from './../project';
import { ProjectService } from './../project.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';




@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;
  editingProject: Project = null;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId).subscribe(result=>this.projectToDisplay = result);

  }

  editProject() {
    this.editingProject = this.projectToDisplay;
    console.log(this.projectToDisplay);
  }

  finishedEditing() {
    this.editingProject = null;
  }

  deleteProject(project){
    if(confirm("Are you sure you want to delete this project?")){
      this.projectService.deleteProject(project);
    }
  }

}
