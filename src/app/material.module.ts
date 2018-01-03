import { NgModule } from '@angular/core';
import {
  MatSliderModule, MatStepperModule, MatButtonModule, MatInputModule, MatRadioModule,
  MatCardModule, MatDialogModule, MatCheckboxModule, MatTooltipModule
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
    MatCheckboxModule,
    MatTooltipModule
  ],
  exports: [
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  declarations: []
})
export class MaterialModule { }
