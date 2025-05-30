import { Component, inject } from '@angular/core';
import { AddExpenseComponent } from '../../components/add-expense/add-expense.component';
import { ListExpenseComponent } from '../../components/list-expense/list-expense.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ExpenseService } from '../../service/expense.service';
import { CategoryService } from '../../../category/service/category.service';
import { Expense } from '../../../models/expense.interface';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [
    AddExpenseComponent,
    ListExpenseComponent,
    NavbarComponent,
    FooterComponent],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export default class ExpenseComponent {



  expenseService= inject(ExpenseService);

 listExpense = this.expenseService.expenses;

  addExpense(expense:Expense){
    return this.expenseService.addExpense(expense);

  }



}
