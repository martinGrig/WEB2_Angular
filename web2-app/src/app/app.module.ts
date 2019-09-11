import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
<<<<<<< HEAD
import { DepartmentsComponent } from './departments/departments.component';
=======
import { TasksComponent } from './tasks/tasks.component';
>>>>>>> ba6d2a99e94ea31200ab4eafaf87dab7170942de

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
<<<<<<< HEAD
    DepartmentsComponent
=======
    TasksComponent
>>>>>>> ba6d2a99e94ea31200ab4eafaf87dab7170942de
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
