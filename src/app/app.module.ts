import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { WebappService } from './webapp.service';
import { AppComponent, EmoDensDia, StateDensDia } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, EmoDensDia, StateDensDia
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [WebappService],
  bootstrap: [AppComponent, EmoDensDia, StateDensDia]
})
export class AppModule { }
