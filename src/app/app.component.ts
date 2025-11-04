import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'mean-stack-app';
 //message: any; 
 items: any[] = [];

 constructor(private apiService: ApiService) {};
 ngOnInit() {
    // Call the backend API when the app loads
    this.apiService.getItems().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (err) => {
        console.error('Error fetching items:', err);
      }
    });
  // Code below from GeeksforGeeks tutorial
  //this.apiService.getMessage().subscribe(data => {
    //this.message = data;
  //});
  }
}
