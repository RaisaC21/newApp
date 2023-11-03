import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  users: any = [];
  permission: boolean = false;
  searchedUser: any = [];
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.permission = true;
    this.getUsers().subscribe((res) => {
      this.users = res;
      this.searchedUser = this.users;
    });
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
  getUsers() {
    return this.http
      .get('assets/files/customers.json')
      .pipe(map((res: any) => res.data));
  }

  searchCustomer(event: any) {
    const text: string = event.target.value.trim();
    this.searchedUser = this.users;
    if (text != '') {
      this.searchedUser = this.searchedUser.filter((user: any) => {
        return user.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
    }
  }
  handleRefresh(event: any) {
    this.getUsers();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
