import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Department } from './Departments';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class DepartmentService {

<<<<<<< HEAD
  private departmentsUrl = 'http://i875395.hera.fhict.nl/api/419549/department';  // URL to web api
=======
  private departmentsUrl = 'http://i875395.hera.fhict.nl/api/400678/department';  // URL to web api
>>>>>>> 9b798573a9ef92f1b99627da7a835c06d7624963

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET tasks from the server */
  getDepartments (): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentsUrl)
      .pipe(
        tap(_ => this.log('fetched departments')),
        catchError(this.handleError<Department[]>('getDepartments', []))
      );
  }

  /** GET task by id. Return `undefined` when id not found */
  getDepartmentNo404<Data>(id: number): Observable<Department> {
    const url = `${this.departmentsUrl}/?id=${id}`;
    return this.http.get<Department[]>(url)
      .pipe(
        map(departments => departments[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} department id=${id}`);
        }),
        catchError(this.handleError<Department>(`getDepartment id=${id}`))
      );
  }

  /** GET task by id. Will 404 if id not found */
  getDepartment(id: number): Observable<Department> {
    const url = `${this.departmentsUrl}/${id}`;
    return this.http.get<Department>(url).pipe(
      tap(_ => this.log(`fetched department id=${id}`)),
      catchError(this.handleError<Department>(`getDepartment id=${id}`))
    );
  }

  /* GET tasks whose name contains search term */
  searchDepartments(term: string): Observable<Department[]> {
    if (!term.trim()) {
      // if not search term, return empty task array.
      return of([]);
    }
    return this.http.get<Department[]>(`${this.departmentsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found departments matching "${term}"`)),
      catchError(this.handleError<Department[]>('searchDepartments', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new task to the server */
  addDepartment (department: Department): Observable<Department> {
    return this.http.post<Department>(this.departmentsUrl, department, this.httpOptions).pipe(
      tap((newDepartment: Department) => this.log(`added department w/ id=${newDepartment.id}`)),
      catchError(this.handleError<Department>('addDepartment'))
    );
  }

  /** DELETE: delete the task from the server */
  deleteDepartment (department: Department | number): Observable<Department> {
    const id = typeof department === 'number' ? department : department.id;
    const url = `${this.departmentsUrl}/${id}`;

    return this.http.delete<Department>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted department id=${id}`)),
      catchError(this.handleError<Department>('deleteDepartment'))
    );
  }

  /** PUT: update the task on the server */
  updateDepartment (department: Department): Observable<any> {
    return this.http.put(this.departmentsUrl, department, this.httpOptions).pipe(
      tap(_ => this.log(`updated department id=${department.id}`)),
      catchError(this.handleError<any>('updateDepartment'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a TaskService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`DepartmentService: ${message}`);
  }
}
