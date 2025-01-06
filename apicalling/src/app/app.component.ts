import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  category: string = ""
  categoryData: any;


  constructor(private http: HttpClient) { }



  ngOnInit() {
    this.http.get('http://localhost:3001/api/v1/categorys', { withCredentials: true }).subscribe((data) => {
      console.log(data);
      this.categoryData = data;
    });
  }


  AddCategory() {

    this.http.post('http://localhost:3001/api/v1/create-category',
      { name: this.category }).subscribe((data) => {
        console.log(data);
        this.ngOnInit();
      })

  }



}
