import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';
import { Department } from './Departments';
import { Injectable } from '@angular/core';
import {Employee} from './employees';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
        { id: 11, name: 'Run', department: 'HR', employee: 'John'},
        { id: 12, name: 'Jump', department: 'Security', employee: 'Lucy'},
        { id: 13, name: 'Climb', department: 'Engineering', employee: 'Veselin'},
        { id: 14, name: 'Fly', department: 'Accouting', employee: 'Jax'},
        { id: 15, name: 'Swim', department: 'Sales', employee: 'Alexander'},
        { id: 16, name: 'Drive', department: 'Production', employee: 'Jerry'},
        { id: 17, name: 'Cycle', department: 'HR', employee: 'John'},
        { id: 18, name: 'Fight', department: 'Security', employee: 'Lucy'},
        { id: 19, name: 'Crouch', department: 'Engineering', employee: 'Veselin'},
        { id: 20, name: 'Sleep', department: 'Accouting', employee: 'Jax'}
    ];
          
    const departments = [
      { id: 1, name : "HR", location: "Tilburg"},
      { id: 2, name : "Security", location: "Amsterdam" },
      { id: 3, name : "Engineering", location: "Eindhoven"},
      { id: 4, name : "Accouting", location: "Tilburg"},
      { id: 5, name : "Sales", location: "Amsterdam" },
      { id: 6, name : "Production", location: "Eindhoven"}
      ];
      
      const employees = [
        { id: 1, name : "John", position: "Sales"},
        { id: 2, name : "Lucy", position: "Security" },
        { id: 3, name : "Veselin", position: "Engineer"},
        { id: 4, name : "Jax", position: "Engineer"},
        { id: 5, name : "Alexander", position: "CEO" },
        { id: 6, name : "Jerry", position: "Janitor"}
      ]
    return {tasks, departments, employees};
  }

  // Overrides the genId method to ensure that a task always has an id.
  // If the tasks array is empty,
  // the method below returns the initial number (11).
  // if the tasks array is not empty, the method below returns the highest
  // task id + 1.
  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }

  
}
