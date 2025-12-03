import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
//  TRYING: COMMENTING OUT TO FIGURE OUT PAGE DISPLAY
//  PAGE UNFINDABLE WITH THE CODE BELOW

export class UsersList implements OnInit{
  //    Inject UserService
  private userService = inject(UserService);
  // Customer List TABLE
  user!: User[]
  ngOnInit(): void {
    this.userService.get().subscribe(
      data => {
        console.log('Users: ', data);
        this.user = data;
      },
      error => {
        console.error('Error: ', error)
      }
    )
  }
} 
  

//export class UsersList { }
