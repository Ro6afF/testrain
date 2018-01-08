import { NgModule } from '@angular/core';
import {
  MatSliderModule, MatStepperModule, MatButtonModule, MatInputModule, MatRadioModule,
  MatCardModule, MatDialogModule, MatCheckboxModule, MatTooltipModule, MatTableModule
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
    MatTooltipModule,
    MatTableModule
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
    MatTooltipModule,
    MatTableModule
  ],
  declarations: []
})
export class MaterialModule { }
