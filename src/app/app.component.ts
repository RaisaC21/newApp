import { Component, getPlatform } from '@angular/core';
//import { Plugins } from '@capacitor/core';
//const { Share } = Plugins;

import { Share } from '@capacitor/share';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customers', url: '/customers', icon: 'people' },
    { title: 'Cities', url: '/cities', icon: 'location' },
    { title: 'Login', url: '/login', icon: 'log-in' },
  ];
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    if (this.platform.is('android')) {
      console.log('La plataforma es android');
    }
  }

  shareApp() {
    Share.share({
      title: 'Has visto la nueva app x',
      text: 'Descarga gratis la nueva app de x y pruebala',
      url: 'https://ionicframework.com/',
    });
  }
}
