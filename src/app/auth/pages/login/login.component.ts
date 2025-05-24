import { Component } from '@angular/core';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { RegisterLoginComponent } from '../../components/register-login/register-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormLoginComponent, RegisterLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

}
