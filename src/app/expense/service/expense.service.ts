import { Injectable, signal } from '@angular/core';
import { Expense } from '../../models/expense.interface';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  expenses = signal<Expense[]>([
    { id: this.generateId(), category: 'servicios', description:'pago de luz', amount:200000, date: '20/05/2025' },
    { id: this.generateId(), category: 'mercado', description:'compra de viveres', amount:200000, date: '15/05/2025' },
    { id: this.generateId(), category: 'salario', description:'compra de fruver', amount:100000, date: '15/05/2025' },
    { id: this.generateId(), category: 'servicios', description:'pago de agua', amount:20000, date: '20/05/2025' },
  ]);

  addExpense(expense: Expense){
    this.expenses.update((list) => [...list, expense])
  }

}
