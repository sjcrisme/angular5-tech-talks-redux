import { Component, EventEmitter, Output, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";
import { TalkService } from './http.service';
import { Talks } from './store/talks.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: any;
  constructor(public talkservice:TalkService) { }

  ngOnInit() {
    this.talkservice.getTalks().subscribe(
      item => {
        this.items = item;
      }
    );
//   @Output() filtersChange = new EventEmitter();drotrweb1720

//   @Input() set filters(v) {
//     this.filtersForm.setValue({
//       title: v.title,
//       speaker: v.speaker,
//       highRating: v.minRating >= 9
//     }, {emitEvent: false});
//   }

//   filtersForm = new FormGroup({
//     speaker: new FormControl(),
//     title: new FormControl(),
//     highRating: new FormControl(false),
//   });
  }
}
