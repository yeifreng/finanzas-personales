import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../../models/category.interface';

@Component({
  selector: 'app-list-category',
  standalone: true,
  imports: [],
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.css'
})
export class ListCategoryComponent {

  listCategory = input<Category[]>()

}
