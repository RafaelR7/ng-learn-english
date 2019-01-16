import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PerguntasService } from './service/perguntas.service';
import { DataService } from './service/data.service';
import { TopoComponent } from './pages/topo/topo.component';
import { PainelModule } from './pages/painel/painel.module';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
  ],
  imports: [
    BrowserModule,
    PainelModule,
    FormsModule,
  ],
  providers: [
    PerguntasService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
