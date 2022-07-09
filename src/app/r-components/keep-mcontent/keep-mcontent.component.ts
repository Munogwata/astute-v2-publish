import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keep-mcontent',
  templateUrl: './keep-mcontent.component.html',
  styleUrls: ['./keep-mcontent.component.scss']
})
export class KeepMcontentComponent implements OnInit {
savingsOpen = true;
savingsClose = false;
debtOpen = false;
debtClose =true;


  constructor() { }

  ngOnInit(): void {
  }

  toggleSaveClose(){
    this.savingsClose = false;
    this.savingsOpen = true;
    this.debtClose = true;
    this.debtOpen= false;
  }

  toggleSaveOpen(){
    this.savingsClose = true;
    this.savingsOpen = false;
    this.debtClose = false;
    this.debtOpen = true;
  }

  toggleDebtOpen(){
    this.savingsClose = false;
    this.savingsOpen = true;
    this.debtClose = true;
    this.debtOpen= false;
  }

  toggleDebtClose(){
    this.savingsClose = true;
    this.savingsOpen = false;
    this.debtClose = false;
    this.debtOpen = true;
  }

}
