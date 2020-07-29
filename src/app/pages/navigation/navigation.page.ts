import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToNavigationItem() {
    this.navCtrl.navigateForward('navigation-item')
  }

}
