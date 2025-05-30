import { Injectable, signal } from '@angular/core';
import { Category } from '../../models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  // Genera un ID aleatorio (versión simplificada)
  generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  categories= signal<Category[]>([
    {id: this.generateId(), name:'servicios'},
    {id: this.generateId(), name:'mercado'},
    {id: this.generateId(), name:'hipoteca'},
    {id: this.generateId(), name:'salario'},
    {id: this.generateId(), name:'comisiones'},
    {id: this.generateId(), name:'bonos'}
  ])

   // Método para agregar nueva categoría
  addCategory(category: Category) {
    this.categories.update((list) => [...list, category])
  }
}
