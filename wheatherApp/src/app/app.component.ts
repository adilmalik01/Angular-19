import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  cityName: string = "";
  wheatherData: any;


  constructor(private http: HttpClient) { }

  getWheather() {

    let apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`

    this.http.get(apiUrl).subscribe(
      (Response) => {

        this.wheatherData = Response
      }
    )

  }


}
