import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  months: any[] = [
    {
      name: "January",
      value: 1,
      checked: false
    },
    {
      name: "February",
      value: 2,
      checked: true
    },
    {
      name: "March",
      value: 3,
      checked: false
    },
    {
      name: "April",
      value: 4,
      checked: false
    },
    {
      name: "May",
      value: 5,
      checked: false
    },
    {
      name: "June",
      value: 6,
      checked: false
    },

  ]

  constructor() { }

  ngOnInit() {
    console.log(this.months)
  }

  showMonths = () => {
    console.log(this.months)
  }
}

