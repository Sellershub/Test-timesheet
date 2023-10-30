export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    phone: string;
    roleId: number;
    managerId: string;
    address: string | null;
    postalCode: string | null;
    city: string | null;
    country: string | null;
    subDepartment: string | null;
    manager: {
      id: string;
      firstName: string;
      lastName: string;
      archivedAt: string | null;
      email: string;
      phone: string;
      position: string;
      avatar: { link: string | null };
    };
    avatar: { link: string };
    department: {
      id: string;
      title: string;
      managerId: string;
    };
    group: string | null;
    division: string | null;
  }
  