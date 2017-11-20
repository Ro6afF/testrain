import { NgModule } from '@angular/core';
import {
  MatSliderModule, MatStepperModule, MatButtonModule, MatInputModule, MatRadioModule,
  MatCardModule, MatDialogModule, MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  exports: [
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class MaterialModule { }
