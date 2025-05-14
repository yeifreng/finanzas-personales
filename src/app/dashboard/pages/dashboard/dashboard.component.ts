import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CardComponent } from '../../components/card/card.component';
import { TableComponent } from '../../components/table/table.component';
import { ResumeComponent } from '../../components/resume/resume.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CardComponent,
    TableComponent,
    ResumeComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

}
