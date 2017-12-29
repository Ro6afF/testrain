import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { WebappService } from './webapp.service';
import { TestComponent, EmoDensDia, StateDensDia } from './test/test.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ResultsComponent } from './results/results.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, EmoDensDia, StateDensDia, ResultsComponent, TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WebappService],
  bootstrap: [AppComponent, EmoDensDia, StateDensDia]
})
export class AppModule { }
