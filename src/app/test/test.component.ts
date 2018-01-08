import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { WebappService } from '../webapp.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Emotion } from '../models/emotion';
import { Statement } from '../models/statement';
import { Statiment } from '../models/statiment';
import { Miniscript } from '../models/miniscript';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  ageFG: FormGroup;
  age: { value: Number, time: Date };
  isMale: boolean;
  emotions: Emotion[] = [];
  statements: Statement[] = [];
  statiments: Statiment[] = [];
  miniscripts: Miniscript[] = [];
  sminiscripts: Miniscript[] = [];
  selectedStatements: { dens: number, time: Date }[] = [];
  selectedEmotions: { id: number, density: number, time: Date }[] = [];
  selectedStatiments: Date[] = [];
  constructor(private _formBuilder: FormBuilder,
    private webSv: WebappService,
    public dialog: MatDialog,
    private router: Router) { }

  loadEmotions(emos) {
    this.emotions = []
    for (let i = 0; i < 10; i++) {
      this.emotions[i] = emos.filter((x) => x.domain_id == i);
    }
  }

  ngOnInit() {
    this.ageFG = this._formBuilder.group({
      ageSlCtl: ['', Validators.compose([Validators.required, Validators.min(10), Validators.max(100)])],
      gender: ['', Validators.required]
    });
    this.webSv.getEmotions().then(x => this.loadEmotions(x)).catch(x => console.log(x));
    this.webSv.getStatements().then(x => this.statements = x).catch(x => console.log(x));
    this.webSv.getStatiments().then(x => this.statiments = x).catch(x => console.log(x));
    this.webSv.getMiniscripts().then(x => this.miniscripts = x).catch(x => console.log(x));
  }

  updateAge(newValue): void {
    this.age = { value: newValue, time: new Date() };
  }

  openEmoDensDio(emotion): void {
    let dialogRef = this.dialog.open(EmoDensDia, {
      data: { emotion: emotion }
    });

    dialogRef.afterClosed().subscribe(x => {
      this.selectedEmotions[emotion.domain_id] = {
        id: emotion.id,
        density: x as number,
        time: new Date()
      };
      this.sminiscripts = [];
      for (let i of this.miniscripts) {
        if (this.selectedEmotions[i.domain1_id] && this.selectedEmotions[i.domain2_id]) {
          this.sminiscripts.push(i);
        }
      }
    });
  }

  openStateDensDia(state): void {
    if (!this.selectedStatements[state.id]) {
      let dialogRef = this.dialog.open(StateDensDia, {
        data: { state: state }
      })
      dialogRef.afterClosed().subscribe(x => {
        this.selectedStatements[state.id] = {
          dens: x as number,
          time: new Date()
        }
      });
    }
    else {
      this.selectedStatements[state.id] = undefined;
    }
  }

  selectStatiment(stati): void {
    if (this.selectedStatiments[stati.id]) {
      this.selectedStatiments[stati.id] = undefined;
    } else {
      this.selectedStatiments[stati.id] = new Date();
    }
  }

  submitData(): void {
    this.webSv.submit({
      age: this.age,
      isMale: this.isMale,
      selectedEmotions: this.selectedEmotions,
      selectedStatements: this.selectedStatements,
      selectedStatiments: this.selectedStatiments
    }).then(x => this.router.navigate(['/results/' + x])).catch(x => alert(x));
  }
}

@Component({
  templateUrl: 'emo-dens-dia.html',
})
export class EmoDensDia {

  constructor(
    public dialogRef: MatDialogRef<EmoDensDia>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogRef.disableClose = true;
  }
}

@Component({
  templateUrl: 'state-dens-dia.html',
})
export class StateDensDia {

  constructor(
    public dialogRef: MatDialogRef<StateDensDia>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogRef.disableClose = true;
  }
}
