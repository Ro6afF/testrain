import { NgModule } from '@angular/core';
import { MatSliderModule, MatStepperModule, MatButtonModule, MatInputModule, MatRadioModule,
         MatCardModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule { }
