import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  title = 'http-fun';
  data;

  ngOnInit() {
    this.apiService.getData().subscribe((data) => this.data = { ...data });
  }
}
