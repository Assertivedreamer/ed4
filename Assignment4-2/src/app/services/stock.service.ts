import { Injectable } from '@angular/core';
import{IEmployeeDetails} from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }
   public getEmployeeRecords():IEmployeeDetails[]{
     return [ 
      {
        "id": 1,
        "first_name": "Robert",
        "last_name": "Schwartz",
        "email": "rob23@gmail.com",
        "salary":"100000",
        "dob":"01/01/1991"
      },
      {
        "id": 2,
        "first_name": "Lucy",
        "last_name": "Ballmer",
        "email": "lucyb56@gmail.com",
        "salary":"20000",
        "dob":"07/04/1992"
      },
      {
        "id": 3,
        "first_name": "Anna",
        "last_name": "Smith",
        "email": "annasmith23@gmail.com",
       "salary":"15000",
     "dob":"01/03/1993"
      },
      {
        "id": 4,
        "first_name": "Robert",
        "last_name": "Brown",
        "email": "bobbrown432@yahoo.com",
       "salary":"25000",
     "dob":"04/02/1994"
      },
      {
        "id": 5,
        "first_name": "Roger",
        "last_name": "Waltz",
        "email": "rogerwatlz12@yahoo.com",
     "salary":"10000",
     "dob":"01/01/1995"
      }
        ]
   }
}