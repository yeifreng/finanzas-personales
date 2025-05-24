import { Injectable, signal } from '@angular/core';
import { Category } from '../../models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  categories= signal<Category[]>([
    {id: '1', name:'servicios'},
    {id: '2', name:'mercado'},
    {id: '1', name:'hipoteca'}
  ])
}
