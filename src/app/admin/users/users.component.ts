import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers: any = [];
  dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private userService: UserService
  ) { 
    this.allUsers = this.users();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
    // this.userService.getAll().subscribe((data: any) => {
    //   this.allUsers = data.data;
    //   this.dtTrigger.next(data);
    // });
  }

  // ngOnDestroy(): void {
  //   this.dtTrigger.unsubscribe();
  // }

  users(): void {
    this.userService.getAll().subscribe( (response: any) => {
      this.allUsers = response.data;
    });
  }

  eliminar(id: number): void {
    this.userService.delete(id).then(response => {
      let index = this.allUsers.findIndex(function(o: any) {
        return o.id === id;
      });
      if (index !== -1) this.allUsers.splice(index, 1);
    });

  }

}
