import { Component, OnInit } from '@angular/core';
import { Department } from '../departments';
import { DepartmentService } from '../department.service';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Employee } from '../employees';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  departments: Department[] = [];
  tasks: Task[] = [];
  employees: Employee[] = [];


  constructor(private departmentService: DepartmentService,
    private taskService: TaskService, private employeeService: EmployeeService) { }
  

  ngOnInit() {
    this.getDepartments();
    this.getTasks();
    this.getEmployees();

  }

  getDepartments(): void {
    this.departmentService.getDepartments()
      .subscribe(departments => this.departments = departments.slice(0, 4));
  }
  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks.slice(0, 4));
  }
  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees.slice(1, 5));
  }

}