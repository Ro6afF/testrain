import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebappService } from './webapp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ageFG: FormGroup;
  age: Number;
  emotions: any = [];

  constructor(private _formBuilder: FormBuilder, private webSv: WebappService) { }

  loadEmotions(emos) {
    this.emotions = []
    for(let i = 0; i < 10; i ++) {
      this.emotions[i] = emos.filter((x) => x.domain_id == i);
    }
  }

  ngOnInit() {
    this.ageFG = this._formBuilder.group({
      ageSlCtl: ['', Validators.compose([Validators.required, Validators.min(10), Validators.max(100)])]
    });
    this.webSv.getEmotions().then(x => this.loadEmotions(x)).catch(x => console.log(x));
  }

  updateAge(newValue): void {
    this.age = newValue; 
  }

  /*onKey(newValue): void {
    this.pesho = newValue.value;
  }*/
}
