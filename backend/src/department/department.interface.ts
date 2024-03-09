interface Department {
  id: number;
  name: string;
  description: string;
  managingDepartmentId: number;
  underManagment: [];
  managingDepartment: [];
  cratedAt: Date;
}

interface Departments {
  data: Department[];
}
