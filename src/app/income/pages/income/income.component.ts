import { Component, inject } from '@angular/core';
import { AddIncomeComponent } from '../../components/add-income/add-income.component';
import { ListIncomeComponent } from '../../components/list-income/list-income.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { IncomeService } from '../../service/income.service';
import { Income } from '../../../models/income.interface';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [
    AddIncomeComponent,
    ListIncomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export default class IncomeComponent {

  incomeService = inject(IncomeService)

  listIncome = this.incomeService.incomes;

  addIncome(income: Income){
    return this.incomeService.addIncome(income)
  }

}
