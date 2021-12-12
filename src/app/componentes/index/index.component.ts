import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  communities: any;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
    let userId = this.authService.me()
    .then( response => {
      this.userService.getCommunitiesByUser(response.id)
      .then( response => {
        this.communities = response.data;
      });
    });
  }

  ngOnInit(): void {
    
  }
}
