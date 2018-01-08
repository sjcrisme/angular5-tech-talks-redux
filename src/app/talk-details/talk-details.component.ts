import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { TalkService } from './../http.service';
import { Talks } from './../store/talks.model';
import { Observable } from 'rxjs/Observable';
// import { TalkService } from './http.service';
// import { Talks } from './store/talks.model';

@Component({
  selector: 'app-detail',
  templateUrl: './talk-details.component.html',
  styleUrls: ['./talk-details.component.css']
})
export class TalkDetailComponent implements OnInit {
  task: Observable<Talks>;
  id:number;
  constructor(public talkservice:TalkService,
              private route: ActivatedRoute
            ) {
              this.route.params.subscribe(res => this.id = res.id);
             } //public talkservice:TalkService) { }

  ngOnInit() {
    this.talkservice.getTalk(this.id).subscribe(
      item => {
        //TODO: need find solution not change model to ?:
        this.task = item;
      }
    );
   }
}