import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private errosSource = new BehaviorSubject<number>(0);
  currentErros = this.errosSource.asObservable();

  constructor() {}

  changeErros(erros: number) {
    this.errosSource.next(erros);
  }

}
