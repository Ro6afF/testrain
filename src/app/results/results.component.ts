import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Submission } from "../models/submission";
import { WebappService } from "../webapp.service";
import { Emotion } from '../models/emotion';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  emotions: Emotion[];
  specInfo: Submission;
  emoDens: { name: string, density: number }[] = [];
  
  constructor(private route: ActivatedRoute, private webSv: WebappService) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.webSv.getEmotions().then(x => this.emotions = x).catch(x => console.log(x));
      this.webSv.getSumbission(this.route.snapshot.paramMap.get('id')).then(x => this.handleData(x)).catch(x => console.log(x));
    }
  }

  handleData(data: Submission) {
    this.specInfo = data;
    for (let emo of data.selectedEmotions) {
      this.emoDens.push({
        name: this.emotions[emo.id].en_name,
        density: Math.round(10 * (this.emotions[emo.id].tension_id + emo.density * (0.2 + 0.2 * (this.emotions[emo.id].string_id + 1)))) / 10
      });
    }
  }
}
