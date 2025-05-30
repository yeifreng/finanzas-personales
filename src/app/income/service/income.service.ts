import { Injectable, signal } from '@angular/core';
import { Income } from '../../models/income.interface';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  incomes = signal<Income[]>([
      { id: this.generateId(), category: 'salario', description:'quincena', amount:700000, date: '15/05/2025' },
      { id: this.generateId(), category: 'comisiones', description:'comisiones', amount:700000, date: '15/05/2025' },
      { id: this.generateId(), category: 'bonos', description:'sodexo', amount:100000, date: '25/05/2025' }
    ]);

    addIncome(income: Income){
      this.incomes.update((list) => [...list, income])
    }

  constructor() { }
}
