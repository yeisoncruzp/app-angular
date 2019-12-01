import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './helpers/Task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  api = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu';
  data = {} ;
  ngOnInit() {
    this.peti();
  }
  peti() {
    console.log('peti');
    this.http.get<Task>(this.api).subscribe(
      data => this.data = (data),
      err => this.data = (err)
    );
  }
}
