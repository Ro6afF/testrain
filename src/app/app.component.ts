import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { WebappService } from './webapp.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

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
  selectedEmotions = [];
  constructor(private _formBuilder: FormBuilder, private webSv: WebappService, public dialog: MatDialog) { }

  loadEmotions(emos) {
    this.emotions = []
    for (let i = 0; i < 10; i++) {
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

  openEmoDensDio(emotion): void {
    console.log(emotion.en_name);
    let dialogRef = this.dialog.open(EmoDensDia, {
      data: { emotion: emotion }
    });

    dialogRef.afterClosed().subscribe(x => {
      this.selectedEmotions[emotion.domain_id] = {
        id: emotion.id,
        density: x
      };
      console.log(this.selectedEmotions);
    });
  }

  /*onKey(newValue): void {
    this.pesho = newValue.value;
  }*/
}

@Component({
  templateUrl: 'emo-dens-dia.html',
})
export class EmoDensDia {

  constructor(
    public dialogRef: MatDialogRef<EmoDensDia>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
