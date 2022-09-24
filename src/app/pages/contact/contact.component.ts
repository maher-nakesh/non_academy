import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyDTBWE1Z3WE9s8gIRK4JmIhJKt3LEB-xiQ',
    });

    loader.load().then(()=>{
      new google.maps.Map(document.getElementById("m")as HTMLInputElement,{
        center:{lat:34.802074,lng:38.996815},
        zoom:6
      })
    })





  }
}
