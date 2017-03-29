import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from './mock-projects';
import { AngularFire, FirebaseListObservable } from 'angularfire2';



@Injectable()
export class ProjectService {
  projects: FirebaseListObservable <any[]>;


  getProjects(){
    return this.projects;
  }

  // getProjects(): Promise<Project[]> {
  //   return Promise.resolve(PROJECTS);
  // }
  // getProject(id: number): Promise<Project> {
  //   return this.getProjects().then(projects => projects.find(project => project.id === id));
  // }
  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

}
