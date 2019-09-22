import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
        { id: 11, name: 'Run'},
        { id: 12, name: 'Jump'},
        { id: 13, name: 'Climb'},
        { id: 14, name: 'Fly'},
        { id: 15, name: 'Swim'},
        { id: 16, name: 'Drive'},
        { id: 17, name: 'Cycle'},
        { id: 18, name: 'Fight'},
        { id: 19, name: 'Crouch'},
        { id: 20, name: 'Sleep'}
          ];
    return {tasks};
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
