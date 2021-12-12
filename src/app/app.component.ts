import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CommunityService } from './services/community.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-proyecto';

  constructor(
    private authService: AuthService,
    private communityService: CommunityService
  ) { }

  ngOnInit() {
    // this.authService.login(
    //   'user@email.com',
    //   'password'
    // ).then((response) => {
    //     console.log(response);
    //     localStorage.setItem('token', response.access_token);
    //     this.communityService.update(55, 'name', 'description', false, '', 4).then(response => console.log(response));
    //   }).catch((error) => {
    //     console.log('error');
    //     console.log(error);
    //   });
  }

  cerrar() {
    this.authService.logout().then(response=>console.log(response)).catch(error=>console.log(error));
  }
}
