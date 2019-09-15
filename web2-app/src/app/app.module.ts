import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
 
import { EmployeesComponent } from './employees/employees.component';

import { DepartmentsComponent } from './departments/departments.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,

    EmployeesComponent,

    DepartmentsComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
