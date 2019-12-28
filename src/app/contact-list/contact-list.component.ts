import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: any = [];


  constructor() { }

  ngOnInit() {

    this.contacts = [
      {
        id: 1,
        name: "Shivraj",
        address: "Kathmandu",
        gender: "Male"
      },
      {
        id: 2,
        name: "Shreetika",
        address: "Biratnagar",
        gender: "Female"
      },
      {
        id: 3,
        name: "Dilip",
        address: "Chitwan",
        gender: "Male"
      },
      {
        id: 4,
        name: "Ajay",
        address: "Butwal",
        gender: "Male"
      },
      {
        id: 5,
        name: "Enosh",
        address: "Kathmandu",
        gender: "Male"
      }
    ];

  }

}
