import { Component, inject, output, signal } from '@angular/core';
import { CategoryService } from '../../../category/service/category.service';
import { Expense } from '../../../models/expense.interface';
import { ExpenseService } from '../../service/expense.service';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {

  categoryService = inject(CategoryService);
  listCategory = this.categoryService.categories();


  category = signal('');
  description = signal('');
  amount = signal(0);
  date = signal('');

  newExpense = output<Expense>();

  addExpense(){
  const selectedCategory = this.listCategory.find(cat => cat.id === this.category())
  const expense: Expense = {
    id: Math.random().toString(36).substring(2, 9),
    category: selectedCategory?.name || 'Sin categoría',
    description: this.description(),
    amount: this.amount(),
    date: this.date()
  }
  this.newExpense.emit(expense)
  this.reset()
  }

  reset(){
    this.category.set('');
    this.description.set('');
    this.amount.set(0);
    this.date.set('');
  }


}
