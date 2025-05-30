import { Component, output, signal } from '@angular/core';
import { Category } from '../../../models/category.interface';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

name = signal('');

newCategory = output<Category>();

addCategory(){
    const category: Category = {
      id: Math.random().toString(36).substring(2, 9),
      name: this.name()
    }
    this.newCategory.emit(category);
    this.reset()
}

reset(){
  this.name.set('');
}

}
