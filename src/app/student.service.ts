//The code is an Angular service called StudentService that provides methods for making HTTP requests to 
//perform CRUD operations (Create, Read, Update, Delete) on student records using the HttpClient module. 
//It has methods for registering a new student, retrieving a list of students, deleting a student by ID, 
//and updating a student record. The API endpoint URLs for these operations are constructed using a base URL 
//(http://localhost:9091) and specific endpoints (/registerStudent, /getStudents, /deleteStudent, /updateStudent). 
//The service is marked as Injectable and provided at the root level, making it available for dependency injection throughout the Angular application.




import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }
  API = 'http://localhost:9091';
  public registerStudent(studentData: any) {
    return this.http.post(this.API + '/registerStudent', studentData);
  }
  public getStudents() {
    return this.http.get(this.API + '/getStudents');
  }
  public deleteStudent(id: any) {
    return this.http.delete(this.API + '/deleteStudent?id=' + id);
  }
  public updateStudent(student:any){
    return this.http.put(this.API+ '/updateStudent',student);
  }
}
