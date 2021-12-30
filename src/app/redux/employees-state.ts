import EmployeeModel from "../models/employees.model";

// Employees State: 
export class EmployeesState {
    public employees: EmployeeModel[] = [];
}

// Employee Action Types:
export enum EmployeeActionType {
    employeesDownloaded = "employeesDownloaded",
    employeeAdded = "employeeAdded",
    employeeUpdated = "employeeUpdated",
    employeeDeleted = "employeeDeleted"
}

// Employee Action: 
export interface EmployeeAction {
    type: EmployeeActionType;
    payload: any;
    // More specific type list:
    // payload: EmployeeModel[] | EmployeeModel | number;
}

// Employee Action Creators: 
export function employeesDownloadedAction(employees: EmployeeModel[]): EmployeeAction {
    return { type: EmployeeActionType.employeesDownloaded, payload: employees };
}
export function employeeAddedAction(employee: EmployeeModel): EmployeeAction {
    return { type: EmployeeActionType.employeeAdded, payload: employee };
}
export function employeeUpdatedAction(employee: EmployeeModel): EmployeeAction {
    return { type: EmployeeActionType.employeeUpdated, payload: employee };
}
export function employeeDeletedAction(id: number): EmployeeAction {
    return { type: EmployeeActionType.employeeDeleted, payload: id };
}

// Employees Reducer:
export function employeesReducer(currentState: EmployeesState = new EmployeesState(), action: EmployeeAction): EmployeesState {
    
    const newState = { ...currentState };

    switch(action.type) {
        case EmployeeActionType.employeesDownloaded: // Here payload is all employees (EmployeeModel[])
            newState.employees = action.payload;
            break;
        case EmployeeActionType.employeeAdded: // Here payload is the added employee (EmployeeModel)
            newState.employees.push(action.payload);
            break;
        case EmployeeActionType.employeeUpdated: { // Here payload is the updated employee (EmployeeModel)
            const index = newState.employees.findIndex(p => p.id === action.payload.id);
            newState.employees[index] = action.payload;
            break;
        }
        case EmployeeActionType.employeeDeleted: { // Here payload is the deleted employee's id (number)
            const index = newState.employees.findIndex(p => p.id === action.payload);
            newState.employees.splice(index, 1);
            break;
        }
    }

    return newState;
}