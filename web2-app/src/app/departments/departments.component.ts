import { Component, OnInit } from '@angular/core';

import { Department } from '../Departments';
import { DepartmentService } from '../department.service';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService.getDepartments()
    .subscribe(departments => this.departments = departments);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { alert("Please type a name"); return; }
    this.departmentService.addDepartment({ name } as Department)
      .subscribe(department => {
       this.departments.push(department);
    });

   // else{
   //   this.departments.forEach(function (value){ 
   //     if(name == value.name){alert("That department already exists"); return;}
   //     
   //       this.departmentService.addDepartment({ name } as Department)
   //       .subscribe(department => {
   //       this.departments.push(department);
   //       });
   //   })
   // }
    

  }

  delete(department: Department): void {
    this.departments = this.departments.filter(h => h !== department);
    this.departmentService.deleteDepartment(department).subscribe();
  }

}
