import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-banking',
  templateUrl: './view-banking.component.html',
  styleUrls: ['./view-banking.component.scss']
})
export class ViewBankingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay:boolean=false;
  toggleDisplay1:boolean=false;
 seeMore(){
   if(this.toggleDisplay===false){
     this.toggleDisplay=true;
   }
   else{
     this.toggleDisplay=false;
   }
 }
 seeMore1(){
  if(this.toggleDisplay1===false){
    this.toggleDisplay1=true;
  }
  else{
    this.toggleDisplay1=false;
  }
}
}
