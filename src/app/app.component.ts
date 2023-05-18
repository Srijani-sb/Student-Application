import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './student.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentDashboard';

  studentDetails:any=null;

  studentToUpdate={
    rollNumber:"",
    name:"",
    address:"",
    percentage:""
    

  };
  constructor(private studentService:StudentService){
    this.getStudentDetails();
  }
  // register(registerForm: NgForm): A function that takes in a NgForm object as an argument, 
  //representing the registration form for a student. It calls the registerStudent function of the studentService 
  //to register the student by sending a HTTP POST request to the server. Upon successful response, 
  //it resets the form and calls getStudentDetails() to refresh the list of students.

  register(registerForm:NgForm) {
    this.studentService.registerStudent(registerForm.value).subscribe(
      (resp)=>{
        console.log(resp);
        registerForm.reset();
        this.getStudentDetails();
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  // getStudentDetails(): A function that calls the getStudents function of the studentService to retrieve
  // the list of registered students from the server. It updates the studentDetails property with the response.

  getStudentDetails(){
    this.studentService.getStudents().subscribe(
      (resp)=>{
        console.log(resp);
        this.studentDetails=resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  //deleteStudent(student: any): A function that takes in a student object as an argument and
  // calls the deleteStudent function of the studentService to delete the student record from the server by 
  //sending a HTTP DELETE request. Upon successful response, it calls getStudentDetails() to refresh the list of 
  //students.

  deleteStudent(student: any){
    this.studentService.deleteStudent(student.rollNumber).subscribe(
      (resp)=>{
        console.log(resp);
        this.getStudentDetails();
      },
      (err)=>{
        console.log(err);
      }
    );
  }
//edit(student: any): A function that takes in a student object as an argument and sets the studentToUpdate
// property with the details of the student, which will be used for updating the student record.

  edit(student:any){
    this.studentToUpdate=student;
  }
  //updateStudent(): A function that calls the updateStudent function of the studentService to 
  //update the student record on the server by sending a HTTP PUT request with the updated details from studentToUpdate object.

  updateStudent(){
    this.studentService.updateStudent(this.studentToUpdate).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}


