import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Project } from './../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css'],
  providers: [ProjectService]
})
export class EditProjectsComponent implements OnInit {
  @Input() editingProject: Project;
  @Output() doneButtonClickedSender = new EventEmitter();



  // doneButtonClicked() {
  //   this.doneButtonClickedSender.emit();
  // }

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  updateProject(selectedProject){
    this.projectService.updateProject(selectedProject);
    console.log(selectedProject);
    this.doneButtonClickedSender.emit();
  }

}
