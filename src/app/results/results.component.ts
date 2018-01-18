import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Submission } from "../models/submission";
import { WebappService } from "../webapp.service";
import { Emotion } from '../models/emotion';
import { Awareness } from '../models/awareness';
import { Miniscript } from '../models/miniscript';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  emotions: Emotion[];
  specInfo: Submission;
  emoDens: { name: string, density: number }[] = [];
  miniscriptAdv: { name: string, advantage: number }[] = [];
  Math = { round: Math.round };
  posStat: number = 0;
  negStat: number = 0;
  pneStat: number = 0;
  sumPos: number = 0;
  sumNeg: number = 0;
  sumAmb: number = 0;
  countPos: number = 0;
  countNeg: number = 0;
  countAmb: number = 0;
  pPos: number;
  pNeg: number;
  pAmb: number;
  awarenesses: Awareness[];
  affectiveMana: Awareness;
  miniscripts: Miniscript[];

  constructor(private route: ActivatedRoute, private webSv: WebappService) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.webSv.getEmotions().then(x => this.emotions = x).catch(x => console.log(x));
      this.webSv.getAwarenesses().then(x => this.awarenesses = x).catch(x => console.log(x));
      this.webSv.getMiniscripts().then(x => this.miniscripts = x).catch(x => console.log(x));
      this.webSv.getSumbission(this.route.snapshot.paramMap.get('id')).then(x => this.handleData(x)).catch(x => console.log(x));
    }
  }

  private scoresLevel(score, n): number {
    if (n == 0) return 0;
    let scr = score / n;
    if (scr > 6.5) return 2;
    else if (scr <= 3.5) return 0;
    else return 1;
  }

  handleData(data: Submission) {
    this.specInfo = data;
    console.log(data);
    for (let emo of data.selectedEmotions) {
      if (emo) {
        let emmo = this.emotions[emo.id];
        this.emoDens.push({
          name: this.emotions[emo.id].en_name,
          density: Math.round(10 * (emmo.tension_id + emo.density * (0.2 + 0.2 * (emmo.string_id + 1)))) / 10
        });
        if (emmo.dimension_id == 0) {
          this.countPos++;
          this.sumPos += emo.density;
        } else if (emmo.dimension_id == 1) {
          this.countNeg++;
          this.sumNeg += emo.density;
        } else if (emmo.dimension_id == 99) {
          this.countAmb++;
          this.sumAmb += emo.density;
        }
      }
    }
    this.pAmb = Math.round(100 * this.countAmb / (this.countAmb + this.countNeg + this.countPos));
    this.pPos = Math.round(100 * this.countPos / (this.countAmb + this.countNeg + this.countPos));
    this.pNeg = Math.round(100 * this.countNeg / (this.countAmb + this.countNeg + this.countPos));
    let scG: string = this.scoresLevel(this.sumNeg, this.countNeg - this.countAmb) + '' + this.scoresLevel(this.sumPos, this.countPos - this.countAmb);
    for (let i of this.awarenesses) {
      if (i.score_group.find((el) => {
        return scG == el;
      })) {
        this.affectiveMana = i;
      }
    }

    for (let i = 0; i < data.selectedMiniscripts.length; i++) {
      if (data.selectedMiniscripts[i]) {
        let currMiniSc = this.miniscripts.find((x) => {
          return x.id == i;
        });
        let currAdv = 0;
        for (let q of data.selectedEmotions) {
          if (q) {
            currAdv++;
          }
        }
        let tmp = 0;
        for (let i of this.emoDens) {
          if (i.name == this.emotions[data.selectedEmotions[currMiniSc.domain1_id].id].en_name
            || i.name == this.emotions[data.selectedEmotions[currMiniSc.domain2_id].id].en_name) {
              tmp += i.density;
          }
        }
        currAdv *= tmp;
        tmp = 0;
        for (let q of data.selectedMiniscripts) {
          if (q)
            tmp++;
        }
        currAdv = Math.round(currAdv * 10 / tmp) / 10;
        if (currMiniSc) {
          this.miniscriptAdv.push({
            name: currMiniSc.en_name,
            advantage: currAdv
          });
        }
      }
    }
  }
}
