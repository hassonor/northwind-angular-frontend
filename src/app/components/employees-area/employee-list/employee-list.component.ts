import { Component, OnInit } from '@angular/core';
import EmployeeModel from 'src/app/models/employees.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { NotifyService } from 'src/app/services/notify.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    public employees: EmployeeModel[];
    public imageUrl = environment.employeeImagesUrl;
    
    constructor(private myEmployeesService: EmployeesService, private notify: NotifyService) { }

    async ngOnInit() {
        try {
            this.employees = await this.myEmployeesService.getAllEmployees();
        }
        catch (err) {
            this.notify.error(err);
        }
    }

}
