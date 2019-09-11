import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
<<<<<<< HEAD
import { EmployeesComponent } from './employees/employees.component';
=======
<<<<<<< HEAD
import { DepartmentsComponent } from './departments/departments.component';
=======
import { TasksComponent } from './tasks/tasks.component';
>>>>>>> ba6d2a99e94ea31200ab4eafaf87dab7170942de
>>>>>>> ad035e8f482a227478f23fb3980bb70b98792b84

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
<<<<<<< HEAD
    EmployeesComponent
=======
<<<<<<< HEAD
    DepartmentsComponent
=======
    TasksComponent
>>>>>>> ba6d2a99e94ea31200ab4eafaf87dab7170942de
>>>>>>> ad035e8f482a227478f23fb3980bb70b98792b84
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
