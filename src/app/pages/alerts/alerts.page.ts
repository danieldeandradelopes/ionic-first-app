import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  alert = async () => {
    const alert = await this.alertCtrl.create({
      header: "Alert",
      subHeader: "SubHeader",
      message: "This is my message",
      buttons: ["OK"]
    });
    alert.present()
  }

  multiple = async () => {
    const alert = await this.alertCtrl.create({
      header: "Alert",
      subHeader: "SubHeader",
      message: "This is my message",
      buttons: ["Disagree", "Agree"]
    });
    alert.present()
  }

  confirm = async () => {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons:
        [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: blah => {
              console.log('Confirm Cancel: blah');
            }
          },
          {
            text: 'Okay',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
    });
    alert.present()
  }

  prompt = async () => {
    const alert = await this.alertCtrl.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'E-mail'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'password'
        },

      ],
      buttons:
        [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          },
          {
            text: 'Ok',
            handler: (form) => {
              console.log(form);
            }
          }
        ]
    })
    alert.present()
  }

}
