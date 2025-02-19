import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 loginClick = false;
  
  constructor(private http:HttpClient) { 
  }
  


  getEmployees(){
    return this.http.get('http://localhost:3000/employees')
  }

  getassets(){
    return this.http.get('http://localhost:3000/assets')
  }

  addEmployee(data:any){
    return this.http.post('http://localhost:3000/employees/',data)
  }
}
