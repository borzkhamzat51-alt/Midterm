import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  getEmployees() {
  return [
    {
      id: 101,
      firstname: 'Joseph',
      lastname: 'Dizon',
      email: 'jdizon@hau.edu.ph',
    },
    {
      id: 102,
      firstname: 'James',
      lastname: 'Atienza',
      email: 'jatienza@hau.edu.ph',
    },
    {
      id: 103,
      firstname: 'Seth',
      lastname: 'Rollins',
      email: 'Strollins@hau.edu.ph',
    },
    {
      id: 104,
      firstname: 'Kobe',
      lastname: 'Bryant',
      email: 'Kbryant@hau.edu.ph',
    },
     {
      id: 105,
      firstname: 'Justin',
      lastname: 'Miranda',
      email: 'jpmiranda2@student.hau.edu.ph',
    },
  ];
}


}
