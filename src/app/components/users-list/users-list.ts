import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
/*
export class UsersList implements OnInit{
  //    Inject UserService
  private userService = inject(UserService);

  ngOnInit(): void {
    this.userService.get().subscribe(
      data => {
        console.log('Users: ', data);
      },
      error => {
        console.error('Error: ', error)
      }
    )
  }
} */

  export class UsersList { }
