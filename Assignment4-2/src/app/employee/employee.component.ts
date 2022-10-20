import { Component, OnInit } from '@angular/core';
import { IEmployeeDetails } from '../models/employee.model';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employeeRecords:IEmployeeDetails[]
  constructor(public stockService:StockService) {
      this.employeeRecords=[];
   }

  ngOnInit(): void {
    this.employeeRecords=this.stockService.getEmployeeRecords();
  }


}