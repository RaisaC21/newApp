import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  customers: any;
  code: any;
  location: any;

  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {}

  scan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        this.code = barcodeData.text;
        console.log(`Barcode data: ${this.code}`);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }
  async locate() {}
}
