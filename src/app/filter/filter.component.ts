import { Component, EventEmitter, Output, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Talks } from './../store/talks.model';

export class Filter{
  constructor(
    public title: string,
    public speaker: string,
    public highRating: boolean,
  ) {  }
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  model = new Filter('','', false);

  constructor() { }

  ngOnInit() {  }

  onClick() {
    this.notify.emit(this.model);
  }
  onSubmit(form:any){
    console.log(form);
  }
  
}
