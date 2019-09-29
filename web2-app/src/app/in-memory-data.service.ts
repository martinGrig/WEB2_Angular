import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
        { id: 1, name: 'Run', department: 'HR', employee: 'John', deadline: '13-11-2019'},
        { id: 2, name: 'Jump', department: 'Security', employee: 'Lucy', deadline: '02-11-2019'},
        { id: 3, name: 'Climb', department: 'Engineering', employee: 'Veselin', deadline: '07-11-2019'},
        { id: 4, name: 'Fly', department: 'Accouting', employee: 'Jax', deadline: '14-11-2019'},
        { id: 5, name: 'Swim', department: 'Sales', employee: 'Alexander', deadline: '11-11-2019'},
        { id: 6, name: 'Drive', department: 'Production', employee: 'Jerry', deadline: '10-11-2019'},
        { id: 7, name: 'Cycle', department: 'HR', employee: 'John', deadline: '22-11-2019'},
        { id: 8, name: 'Fight', department: 'Security', employee: 'Lucy', deadline: '01-11-2019'},
        { id: 9, name: 'Crouch', department: 'Engineering', employee: 'Veselin', deadline: '06-11-2019'},
        { id: 10, name: 'Sleep', department: 'Accouting', employee: 'Jax', deadline: '26-11-2019'}
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


  
}
