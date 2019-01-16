import { Injectable } from '@angular/core';

@Injectable()
export class PerguntasService {

  constructor() { }

  getPerguntas(){
    return [
      { pergunta: 'What time is it?', resposta: 'QUE HORAS SAO?' },
      { pergunta: 'Please, call me', resposta: 'POR FAVOR, ME LIGUE' },
      { pergunta: 'Do you speak English?', resposta: 'VOCE FALA INGLES?' },
      { pergunta: 'I am hungry', resposta: 'EU ESTOU COM FOME' },
      { pergunta: 'How old are you?', resposta: 'QUANTOS ANOS VOCE TEM?' },
      { pergunta: 'Where do you live? ', resposta: 'ONDE VOCE MORA?' },
      { pergunta: 'What are you going to do today?', reposta: 'O QUE VOCE VAI FAZER HOJE?' },
      { pergunta: 'I will go to school', resposta: 'EU VOU PARA A ESCOLA' },
      { pergunta: 'Nice to meet you', resposta: 'PRAZER EM TE CONHECER' },
      { pergunta: 'Can you help me?', resposta: 'VOCE PODE ME AJUDAR?' },
    ]
  }

}
