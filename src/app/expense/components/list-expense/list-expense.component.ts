import { Component, input } from '@angular/core';
import { Expense } from '../../../models/expense.interface';

@Component({
  selector: 'app-list-expense',
  standalone: true,
  imports: [],
  templateUrl: './list-expense.component.html',
  styleUrl: './list-expense.component.css'
})
export class ListExpenseComponent {

  listExpense = input<Expense[]>()

}
