import { Component, OnInit } from '@angular/core';

// https://www.brandcrowd.com/maker/logos?text=electric

export interface Business  {
  name: string;
  logo: string;
  category: string[];
  services: string[];
  regNumber: string;
  description: string;
};
@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.scss']


})
export class AppBusinessesComponent implements OnInit {
  businesses: Business[] = [
    {
      name: "Shuttle 24",
      logo: 'assets/images/businesses/b14.PNG',
      category: ["Transport"],
      services: ["Shuttle", "Uber", "Taxify", "Bolt"],
      regNumber: "201 0001 000",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, recusandae."
    },
    {
      name: "Sponge Bob",
      logo: 'assets/images/businesses/b13.PNG',
      category: ["Cleaning","Car Wash"],
      services: ["Car Wash", "Carpet wash", "Valet"],
      regNumber: "301 0001 000",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, recusandae."
    },
    {
      name: "Big Barista",
      logo: 'assets/images/businesses/b0.PNG',
      category: ["Food"],
      services: ["Coffee", "Tea", "Breakfast"],
      regNumber: "101 0001 000",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, recusandae."
    },
    {
      name: "Pipe Master",
      logo: 'assets/images/businesses/b10.PNG',
      category: ["Plumbing"],
      services: ["Unblocking", "Leakage", "High bill"],
      regNumber: "100 2000 000",
      description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatem"
    },
    {
      name: "Paka Studios",
      logo: 'assets/images/businesses/b6.PNG',
      category: ["Branding","Photography"],
      services: ["Photography", "Branding", "Website"],
      regNumber: "404 0000 000",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, recusandae."
    },
    {
      name: "Baba Barbershop",
      logo: 'assets/images/businesses/b12.PNG',
      category: ["Salon","Barbarshop"],
      services: ["Hair Salon", "Nail Salon"],
      regNumber: "101 0000 000",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, recusandae."
    },
    {
      name: "Yellow Light",
      logo: 'assets/images/businesses/b9.PNG',
      category: ["Electriciy"],
      services: ["Installation", "Connections"],
      regNumber: "500 0000 000",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, recusandae."
    },
    {
      name: "1 Tutor",
      logo: 'assets/images/businesses/b7.PNG',
      category: ["Tutoring","Education"],
      services: ["Tutor"],
      regNumber: "909 0000 000",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, recusandae."
    },
    {
      name: "Clothing",
      logo: 'assets/images/businesses/b5.PNG',
      category: ["Fashion"],
      services: ["Wardrobe", "Tailor"],
      regNumber: "400 0000 000",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, recusandae."
    },
    {
      name: "Mbuso & Friends",
      logo: 'assets/images/businesses/b2.PNG',
      category: ["Legal"],
      services: ["Legal", "Will"],
      regNumber: "800 0000 000",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, recusandae."
    },
    {
      name: "I Green",
      logo: 'assets/images/businesses/b8.PNG',
      category: ["Salon", "Spa"],
      services: ["Spa", "Massage"],
      regNumber: "700 0000 000",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, recusandae."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
 

}
