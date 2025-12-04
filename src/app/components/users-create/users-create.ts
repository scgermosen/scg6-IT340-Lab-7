import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-users-create',
  imports: [    
    MatButtonModule,
    RouterModule,
    MatIconModule
  ]
    ,
  templateUrl: './users-create.html',
  styleUrl: './users-create.css',
})
export class UsersCreate {

}
