import { Component } from '@angular/core';
import { AddCategoryComponent } from '../../components/add-category/add-category.component';
import { ListCategoryComponent } from '../../components/list-category/list-category.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

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

}
