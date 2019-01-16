import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PainelComponent } from './painel.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { PopupModule } from 'ng2-opd-popup';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { PerguntasService } from '../../service/perguntas.service';
import { DataService } from '../../service/data.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PopupModule.forRoot(),
    NgbModule.forRoot(),
    ProgressbarModule.forRoot(),
  ],
  declarations: [TentativasComponent, PainelComponent],
  exports: [PainelComponent, TentativasComponent],
  providers: [DataService, PerguntasService]
})
export class PainelModule {}
