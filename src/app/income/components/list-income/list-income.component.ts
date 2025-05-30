import { Component, input } from '@angular/core';
import { Income } from '../../../models/income.interface';

@Component({
  selector: 'app-list-income',
  standalone: true,
  imports: [],
  templateUrl: './list-income.component.html',
  styleUrl: './list-income.component.css'
})
export class ListIncomeComponent {
listIncome = input<Income[]>()
}
