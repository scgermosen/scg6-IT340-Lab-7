import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

}
