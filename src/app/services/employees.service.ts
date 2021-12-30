import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import EmployeeModel from '../models/employees.model';
import { employeeAddedAction, employeeDeletedAction, employeesDownloadedAction, employeeUpdatedAction } from '../redux/employees-state';
import store from '../redux/store';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {

    constructor(private http: HttpClient) { }

    // Get all employees: 
    public async getAllEmployees() {
        if (store.getState().employeesState.employees.length === 0) {
            const employees = await this.http.get<EmployeeModel[]>(environment.employeesUrl).toPromise();
            store.dispatch(employeesDownloadedAction(employees));
        }
        return store.getState().employeesState.employees;
    }

    // Get one employee: 
    public async getOneEmployee(id: number) {
        if (store.getState().employeesState.employees.length === 0) {
            const employees = await this.http.get<EmployeeModel[]>(environment.employeesUrl).toPromise();
            store.dispatch(employeesDownloadedAction(employees));
        }
        const employee = store.getState().employeesState.employees.find(p => p.id === id);
        return employee;
    }

    // Add employee: 
    public async addEmployee(employee: EmployeeModel) {
        const myFormData: FormData = EmployeeModel.convertToFormData(employee);
        const addedEmployee = await this.http.post<EmployeeModel>(environment.employeesUrl, myFormData).toPromise();
        store.dispatch(employeeAddedAction(addedEmployee));
        return addedEmployee;
    }

    // Update employee: 
    public async updateEmployee(employee: EmployeeModel) {
        const myFormData: FormData = EmployeeModel.convertToFormData(employee);
        const updatedEmployee = await this.http.put<EmployeeModel>(environment.employeesUrl + employee.id, myFormData).toPromise();
        store.dispatch(employeeUpdatedAction(updatedEmployee));
        return updatedEmployee;
    }

    // Delete employee: 
    public async deleteEmployee(id: number) {
        await this.http.delete(environment.employeesUrl + id).toPromise();
        store.dispatch(employeeDeletedAction(id));
    }

}
