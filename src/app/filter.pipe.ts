import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(projects: any, term: any): any {
    if (term === undefined) return projects;
    return projects.filter(function(project) {
      return project.header.toLowerCase().includes(term.toLowerCase());
    })
  }

}
