import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
 artical:any;

  constructor(private ApiCaller: HttpClient) {}

  getlocaldataformat() {
    this.ApiCaller.get('https://mocki.io/v1/4492c85c-c88b-48e0-b709-416e9cdefc15')
    //https://jsonplaceholder.typicode.com/users
    .subscribe(respnse =>{
      this.artical=respnse;
    })

  }



  ngOnInit(): void {
    this.getlocaldataformat();
  }
}
