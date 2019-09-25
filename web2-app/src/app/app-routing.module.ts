import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent }      from './tasks/tasks.component';
import { TaskDetailComponent }  from './task-detail/task-detail.component';

import { DepartmentsComponent }      from './departments/departments.component';
import { DepartmentDetailComponent }  from './department-detail/department-detail.component';

import { EmployeesComponent }    from './employees/employees.component';
import { EmployeeDetailComponent }  from './employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: EmployeeDetailComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'detailss/:id', component: DepartmentDetailComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'details/:id', component: TaskDetailComponent },
  { path: 'tasks', component: TasksComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
