import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Popup } from 'ng2-opd-popup';
import { PerguntasService } from '../../service/perguntas.service';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  perguntas: any[];
  numero: number;
  acertos = 0;
  erros = 0;
  timer = 0;
  tempoParaResposta = 30;
  interval;

  @ViewChild('popup') popup: Popup;
  @ViewChild('f') form: NgForm;

  constructor(
    private perguntasService: PerguntasService,
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.currentErros.subscribe(erros => (this.erros = erros));
    this.getPergunta();
    this.startTimer();
  }

  getPergunta() {
    this.form.reset();
    this.perguntas = this.perguntasService.getPerguntas();
    this.numero = Math.floor(Math.random() * 10);
  }

  checkResposta(form: NgForm) {
    const resposta = this.removerAcentos(form.value.resposta).toUpperCase();
    if (resposta === this.perguntas[this.numero].resposta) {
      this.acertos++;
    } else {
      this.erros++;
      this.data.changeErros(this.erros);
    }
    this.getPergunta();
    this.resetTimer();
    if (this.erros !== 3 ) {
      this.startTimer();
    }
  }

  removerAcentos(newStringComAcento) {
    let string = newStringComAcento;
    const mapaAcentosHex = {
      a: /[\xE0-\xE6]/g,
      A: /[\xC0-\xC6]/g,
      e: /[\xE8-\xEB]/g,
      E: /[\xC8-\xCB]/g,
      i: /[\xEC-\xEF]/g,
      I: /[\xCC-\xCF]/g,
      o: /[\xF2-\xF6]/g,
      O: /[\xD2-\xD6]/g,
      u: /[\xF9-\xFC]/g,
      U: /[\xD9-\xDC]/g,
      c: /\xE7/g,
      C: /\xC7/g,
      n: /\xF1/g,
      N: /\xD1/g
    };
    for (const letra in mapaAcentosHex) {
      const expressaoRegular = mapaAcentosHex[letra];
      string = string.replace(expressaoRegular, letra);
    }
    return string;
  }

  resetScore() {
    this.acertos = 0;
    this.erros = 0;
    this.data.changeErros(this.erros);
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer < this.tempoParaResposta) {
        this.timer++;
      } else {
        if (this.erros === 2) {
          this.openPopUp();
          this.resetTimer();
        }
        this.erros++;
        this.data.changeErros(this.erros);
        this.getPergunta();
        this.timer = 0;
      }
    }, 1000);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.timer = 0;
  }

  openPopUp() {
    this.popup.options = {
      header: 'Game Over',
      color: '#007BFF', // red, blue....
      widthProsentage: 25, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      animation: 'bounceInDown' // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
    };

    if (this.erros >= 2) {
      this.resetTimer();
      this.popup.show(this.popup.options);
    }
  }

  closePopup() {
    this.resetScore();
    this.popup.hide();
  }
}
