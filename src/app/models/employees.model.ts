class EmployeeModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public title: string;
    public country: string;
    public city: string;
    public birthDate: string;
    public imageName: string;
    public image: FileList;

    public static convertToFormData(employee: EmployeeModel): FormData {
        const myFormData = new FormData();
        myFormData.append("firstName", employee.firstName);
        myFormData.append("lastName", employee.lastName);
        myFormData.append("title", employee.title);
        myFormData.append("country", employee.country);
        myFormData.append("city", employee.city);
        myFormData.append("birthDate", employee.birthDate);
        if(employee.image) myFormData.append("image", employee.image.item(0));
        return myFormData;
    }
}

export default EmployeeModel;