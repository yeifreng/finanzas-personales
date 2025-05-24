import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { UpdateProfileComponent } from '../../components/update-profile/update-profile.component';
import { PwdProfileComponent } from '../../components/pwd-profile/pwd-profile.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    ProfileComponent,
    UpdateProfileComponent,
    PwdProfileComponent,
    NavbarComponent,
    FooterComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export default class UserComponent {

}
