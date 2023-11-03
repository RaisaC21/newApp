import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {
  token = localStorage.getItem('token');
  cities: any = [];
  constructor(
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    console.log(this.token);
    //localStorage.removeItem('token');
    localStorage.clear();
    this.getCities().subscribe((res) => (this.cities = res));
  }
  getCities() {
    return this.http
      .get('assets/files/cities.json')
      .pipe(map((res: any) => res.data));
  }
  async presentToast1() {
    const toast = await this.toastController.create({
      message: 'Ciudad seleccionada',
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  async presentAlert1() {
    const toast = await this.alertController.create({
      header: 'Borrar Ciudad',
      message: 'Se ha borrado la ciudad correctamente',
      buttons: ['OK'],
    });
    await toast.present();
    let result = await toast.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const toast = await this.alertController.create({
      header: 'Borrar Ciudad',
      message: '¿Estás seguro que quieres borrar la ciudad?',
      buttons: [
        {
          text: 'No',
          handler: () => console.log('No cancel'),
        },
        {
          text: 'Si',
          handler: () => console.log('Ciudad eliminada'),
        },
      ],
    });
    await toast.present();
    let result = await toast.onDidDismiss();
    console.log(result);
  }
}
