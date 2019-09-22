import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent }      from './tasks/tasks.component';
import { TaskDetailComponent }  from './task-detail/task-detail.component';

import { DepartmentsComponent }      from './departments/departments.component';
import { DepartmentDetailComponent }  from './department-detail/department-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'detail/:id', component: DepartmentDetailComponent },
  { path: 'departments', component: DepartmentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
