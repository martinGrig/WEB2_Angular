import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  add(id: number, name: string, description: string, due_date:string): void {
    name = name.trim();
    if (!name) { alert("Please type a name"); return; }
    this.taskService.addTask({ id, name, description, due_date } as Task)
      .subscribe(task => {
        this.tasks.push(task);
      });
  }

  
  delete(task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task);
    this.taskService.deleteTask(task).subscribe();
  }

}
