import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from './../project';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
 @Output() newProjectSender = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addProject(header:string, description:string) {
    var newProject: Project = {header: header, description:description, id: null, $key: null};
    this.newProjectSender.emit(newProject);
  }
}
