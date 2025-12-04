import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox'

@Component({
  selector: 'app-register',
  imports: [
    MatButtonModule,
    RouterModule,
    MatCheckboxModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

}
