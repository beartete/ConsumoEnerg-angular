import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumoEnergiaComponent } from './consumo-energia/consumo-energia.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumoEnergiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicione esta linha aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

