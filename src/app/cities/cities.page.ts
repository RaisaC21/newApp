import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {
  cities: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCities().subscribe((res) => (this.cities = res));
  }
  getCities() {
    return this.http
      .get('assets/files/cities.json')
      .pipe(map((res: any) => res.data));
  }
}
