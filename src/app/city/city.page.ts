import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {
  id: any;
  cities: any;
  finalId: number = 0;
  name: string = '';
  image: string = '';
  desc: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.finalId = this.id - 1;
    this.getCity().subscribe((res) => {
      this.cities = res;
      this.name = this.cities[this.finalId].name;
      this.image = this.cities[this.finalId].image;
      this.desc = this.cities[this.finalId].desc;
    });
  }

  getCity() {
    return this.http
      .get('assets/files/cities.json')
      .pipe(map((res: any) => res.data));
  }
}
