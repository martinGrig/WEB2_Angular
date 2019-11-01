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
  selectedTask = {id: null, department_id: 0, name: '', employees: [], due_date: null};

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
  Delete(task: Task){
    if(confirm("Are you sure?")) {
      this.taskService.deleteTask(task).subscribe();
      this.tasks = this.tasks.filter(t => t !== task);
      this.selectedTask = {id: null, department_id: 0, name: '', employees: [], due_date: null};
    }
  }

}
