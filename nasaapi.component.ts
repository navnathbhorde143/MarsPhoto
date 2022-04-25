import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasaapi',
  templateUrl: './nasaapi.component.html',
  styleUrls: ['./nasaapi.component.css']
})
export class NasaapiComponent implements OnInit {

  MarsObject:any={};

  GetMarsPhoto(){
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&#39`)
    .then(res=>res.json())
    .then(data=>{
        this.MarsObject=data;
    })
  }

  constructor() { }

  ngOnInit(): void {
    this.GetMarsPhoto();
  }

}
