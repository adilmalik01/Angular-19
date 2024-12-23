import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  productData: any;

  constructor(public http: HttpClient) { }

  public FetchData() {

    this.http.get('https://dummyjson.com/products').subscribe((data: any) => {

      console.log(data.products);

      this.productData = data.products


    });

  }


  ngOnInit() {
    this.FetchData()
  }

}
