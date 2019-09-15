import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import {Task} from '../Models/Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor() { }

  ngOnInit() { 
    this.tasks = [
      {
        id: 1,
        name : "Calculate",
        finished : true,

      },
      {
        id: 2,
        name : "Design",
        finished : false,

      },{
        id: 3,
        name : "Guard",
        finished : true,

      }
    ]
}
}
