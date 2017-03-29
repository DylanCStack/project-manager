import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Project } from './../project';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent implements OnInit {
  @Input() childSelectedProject: Project;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
