import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  showSpecInfo: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id')) {
      this.showSpecInfo = true;
    }
  }
}
