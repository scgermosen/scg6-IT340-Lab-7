import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox'


@Component({
  selector: 'app-login',
  imports: [
    MatButtonModule,
    RouterModule,
    MatCheckboxModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
