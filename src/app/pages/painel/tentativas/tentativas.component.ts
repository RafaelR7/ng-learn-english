import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {
  erros: number;
  vazio = '../../../assets/coracao_vazio.png';
  cheio = '../../../assets/coracao_cheio.png';
  vidas = [];

  constructor(private data: DataService) {}

  ngOnInit() {}
  ngAfterContentChecked() {
    this.data.currentErros.subscribe(erros => (this.erros = erros));
    this.vidas = [this.cheio, this.cheio, this.cheio];

    if (this.erros === 1) {
      this.vidas[0] = this.vazio;
    } else if (this.erros === 2) {
      this.vidas[0] = this.vazio;
      this.vidas[1] = this.vazio;
    } else if (this.erros === 3) {
      this.vidas[0] = this.vazio;
      this.vidas[1] = this.vazio;
      this.vidas[2] = this.vazio;
    }
  }
}
