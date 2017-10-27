import { NgModule } from '@angular/core';
import { MatSliderModule, MatStepperModule, MatButtonModule, MatInputModule, MatRadioModule,
         MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule
  ],
  exports: [
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
