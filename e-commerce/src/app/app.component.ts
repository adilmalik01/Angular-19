import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  postsData: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("Function is Working...........!");

    this.http.get("https://dummyjson.com/posts").subscribe((data: any) => {
      this.postsData = data.posts
    })

  }


  // https://dummyjson.com/posts



}
