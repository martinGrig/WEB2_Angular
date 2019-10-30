import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';

import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent }  from './task-detail/task-detail.component';

 
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentSearchComponent }  from './department-search/department-search.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './dashboard/dashboard.component';

//Bootstrap Modules
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { PopoverModule } from 'ngx-bootstrap/popover';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
    //),
    

    PopoverModule.forRoot()
  ],

  declarations: [
    AppComponent,

    TasksComponent,
    TaskDetailComponent,

    EmployeesComponent,
    EmployeeDetailComponent,

    DepartmentsComponent,
    DepartmentDetailComponent,
    DepartmentSearchComponent,

    DashboardComponent,

    EmployeeSearchComponent,

    TaskSearchComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
