import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public blogs;
  //public baseUrl = "https://appapi20190513033433.azurewebsites.net/";

  constructor(http: HttpClient,@Inject('BASE_URL') baseUrl: string) {
    http.get(baseUrl + 'api/values').subscribe(result => {
      this.blogs = result;
    }, error => console.error(error));
  }
}
