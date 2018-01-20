import { Component, EventEmitter, Output, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { TalkService } from './../http.service';
import { Talks } from './../store/talks.model';

@Component({
  selector: 'app-tech-talks',
  templateUrl: './tech-talks.component.html',
  styleUrls: ['./tech-talks.component.css']
})
export class TechTalksComponent implements OnInit {
  items: any;
  sometext ='';
  constructor(public talkservice:TalkService) { }

  ngOnInit() {
    this.talkservice.getTalks().subscribe(
      item => {
        this.items = item;
      }
    );
  }

  onNotify(message:string):void {
    this.sometext = message + "+ что то новое из родителя";    
   //  alert(" >>> " + message);
   }
}
