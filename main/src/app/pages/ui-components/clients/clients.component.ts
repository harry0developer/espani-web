import { Component, OnInit } from '@angular/core';

export interface Client  {
  name: string;
  icon: string;
  dob: string;
  gender: string;
  email: string;
  phone: string;
};
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class AppClientsComponent implements OnInit {
  clients: Client[] = [
    {
      name: "Thato Mosa",
      icon: 'assets/images/profile/user-1.jpg',
      dob: "01-01-1995",
      gender: "Female",
      email: "thato@mailinator.com",
      phone: "0820002000"
    },{
      name: "Jan Van Ree",
      icon: 'assets/images/profile/user-2.jpg',
      dob: "01-01-1991",
      gender: "Male",
      email: "jan@mailinator.com",
      phone: "0812442000"
    },
    {
      name: "Pearl Thusha",
      icon: 'assets/images/profile/user-3.jpg',
      dob: "21-06-1996",
      gender: "Female",
      email: "peral@mailinator.com",
      phone: "08455588880"
    },
    {
      name: "Eddie Mbhabo",
      icon: 'assets/images/profile/user-4.jpg',
      dob: "01-01-1997",
      gender: "Male",
      email: "eddie@mailinator.com",
      phone: "0725552000"
    },
    {
      name: "Mbali Mlando",
      icon: 'assets/images/profile/user-1.jpg',
      dob: "22-03-1999",
      gender: "Female",
      email: "mbali@mailinator.com",
      phone: "0826668000"
    },
    {
      name: "Lean Baker",
      icon: 'assets/images/profile/user-2.jpg',
      dob: "01-01-1998",
      gender: "Female",
      email: "lean@mailinator.com",
      phone: "08207770800"
    },
    {
      name: "Lee Jon woo",
      icon: 'assets/images/profile/user-3.jpg',
      dob: "01-01-1997",
      gender: "Male",
      email: "lee@mailinator.com",
      phone: "0822200005"
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }
 

}
