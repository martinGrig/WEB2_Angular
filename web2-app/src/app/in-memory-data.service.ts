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
      { id: 1, name : "HR", building: "Tilburg", employees: ['John']},
      { id: 2, name : "Security", building: "Amsterdam", employees: ['Lucy']},
      { id: 3, name : "Engineering", building: "Eindhoven", employees: ['Veselin']},
      { id: 4, name : "Accouting", building: "Tilburg", employees: ['Jax']},
      { id: 5, name : "Sales", building: "Amsterdam", employees: ['Alexander'] },
      { id: 6, name : "Production", building: "Eindhoven", employees: ['Jerry']}
      ];
      
      const employees = [
        { id: 1, name : "John", position: "Sales", department: "HR"},
        { id: 2, name : "Lucy", position: "Security", department: "Security" },
        { id: 3, name : "Veselin", position: "Engineer", department: "Engineering"},
        { id: 4, name : "Jax", position: "Engineer", department: "Accounting"},
        { id: 5, name : "Alexander", position: "CEO", department: "Sales" },
        { id: 6, name : "Jerry", position: "Janitor", department: "Production"}
      ]
    return {tasks, departments, employees};
  }


  
}
