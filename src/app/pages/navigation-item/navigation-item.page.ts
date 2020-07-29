import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.page.html',
  styleUrls: ['./navigation-item.page.scss'],
})
export class NavigationItemPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToNavigation() {
    this.navCtrl.navigateForward('navigation')
  }
}
