import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-mcontent',
  templateUrl: './make-mcontent.component.html',
  styleUrls: ['./make-mcontent.component.scss']
})
export class MakeMcontentComponent implements OnInit {

  homeMake = true;
  recMake = false;


  constructor() { }

  ngOnInit(): void {
  }


  toggleBack(){
    this.homeMake =! this.homeMake
    this.recMake =! this.recMake
  }


  toggleAdvise(){
    this.homeMake =! this.homeMake
    this.recMake =! this.recMake
  }
}
