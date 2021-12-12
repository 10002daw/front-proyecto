import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ThreadService } from 'src/app/services/thread.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  threads: any;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private threadService: ThreadService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.params.subscribe(params => {
      this.threadService.getThreadsByCommunity(params['id'])
      .then( response => {
        console.log(response[<any>'data']);
        this.threads = response[<any>'data'];
      });
    });
  }

  ngOnInit(): void {
  }

}
