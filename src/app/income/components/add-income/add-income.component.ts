import { Component, inject, output, signal } from '@angular/core';
import { Income } from '../../../models/income.interface';
import { CategoryService } from '../../../category/service/category.service';
import { IncomeService } from '../../service/income.service';

@Component({
  selector: 'app-add-income',
  standalone: true,
  imports: [],
  templateUrl: './add-income.component.html',
  styleUrl: './add-income.component.css'
})
export class AddIncomeComponent {

  categoryService = inject(CategoryService);
    listCategory = this.categoryService.categories();

    IncomeService = inject(IncomeService);

  category = signal('');
  description = signal('');
  amount = signal(0);
  date = signal('');

  newIncome = output<Income>();

  addIncome(){
    const selectedCategory = this.listCategory.find(cat => cat.id === this.category())
    const income: Income = {
      id : Math.random().toString(36).substring(2,9),
      category: selectedCategory?.name || 'Sin categoría',
      description : this.description(),
      amount : this.amount(),
      date : this.date()
    }
    this.newIncome.emit(income)
    this.reset()
  }

  reset(){
    this.category.set('');
    this.description.set('');
    this.amount.set(0);
    this.date.set('');
  }


}
