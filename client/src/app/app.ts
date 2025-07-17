import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
// Using OnInit lifecycle hook to initialize the component, it is used for component initialization logic.
  private http = inject(HttpClient); // Using inject to get HttpClient instance, this is recommended in Angular 16+ for better tree-shaking and DI.
  protected title = signal('Dating app');

  ngOnInit(): void{
    this.http.get('https"//localhost:5001/api/members').subscribe({
      next: response => console.log(response),
      error: error => console.error('There was an error!', error),
      complete: () => console.log('HTTP Request completed')
    })

  }
  //inject httpClient: HttpClient;
  //constructor(private http: HttpClient){} //this is the legacy way to inject HttpClient in Angular
}
