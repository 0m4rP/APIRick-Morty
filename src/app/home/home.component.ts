import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  data: any[] = [];

  constructor(private api: ApiService){}



  ngOnInit(): void {
  this.llenarData();  
  }


  llenarData(){
    this.api.getData().subscribe({
      next: (data) => {
        this.data = Array.isArray(data) ? data : [data];
        console.log(data);
      }
    })
  }


}
