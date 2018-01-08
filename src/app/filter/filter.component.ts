import { Component, EventEmitter, Output, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Talks } from './../store/talks.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {  }
}
