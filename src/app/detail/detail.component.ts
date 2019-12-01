import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() movie;
  @Output() outputToParent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    const val = 'false';
    this.outputToParent.emit(val);
    //console.log('close modal', val);
  }

}
