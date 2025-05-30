import { Component, inject } from '@angular/core';
import { AddCategoryComponent } from '../../components/add-category/add-category.component';
import { ListCategoryComponent } from '../../components/list-category/list-category.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../../models/category.interface';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    AddCategoryComponent,
    ListCategoryComponent,
    NavbarComponent,
    FooterComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export default class CategoryComponent {

  categoryService = inject(CategoryService)

  listCategory = this.categoryService.categories

  addCategory(category:Category){
    return this.categoryService.addCategory(category)
  }

}
