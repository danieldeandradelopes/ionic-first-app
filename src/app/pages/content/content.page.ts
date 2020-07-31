import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logScrollStart = () => {
    console.log('Interation with scroll')
  }

  logScrollEnd = () => {
    console.log('Interation finish')
  }

  logScrolling = (e: Event) => {
    console.log(e)
  }


}
