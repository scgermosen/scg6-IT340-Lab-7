import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-create',
  imports: [    
    MatButtonModule,
    RouterModule]
    ,
  templateUrl: './users-create.html',
  styleUrl: './users-create.css',
})
export class UsersCreate {

}
