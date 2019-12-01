import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list ;
  load = false;
  showList = false;
  data = [];
  movie = {};
  showModal = 'false';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.data = this.list.results;
      //console.log(this.data, window.screen.width);
      this.load = true;
    }, 2000);
    //console.log(this.showModal);
  }

  GetOutputVal($event) {
    //console.log($event);
    if ($event) {
      this.showModal = $event;
    }
  }

  openModal(movie) {
    this.showModal = 'true';
    this.movie = movie;
  }

}
