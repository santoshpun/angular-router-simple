import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contacts = [
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

  public contact: any = { id: 0, name: '', address: '', gender: '' };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);

      let id = parseInt(params.get('id'));

      for (var i = 0; i < this.contacts.length; i++) {
        let obj = this.contacts[i];

        if (obj.id == id) {
          this.contact = {
            id: obj.id,
            name: obj.name,
            address: obj.address,
            gender: obj.gender
          };
        }
      }
      // });
    });

  }



}
