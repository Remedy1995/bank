import { Component, OnInit,Inject,LOCALE_ID} from '@angular/core';
import { ModelData } from 'src/models/info';
import { Data } from 'src/models/data';
import { formatNumber,formatCurrency } from '@angular/common';
@Component({
  selector: 'app-view-banking',
  templateUrl: './view-banking.component.html',
  styleUrls: ['./view-banking.component.scss']
})
export class ViewBankingComponent implements OnInit {
  modeldata: ModelData[]=Data;
  amount:any;
  clientname:any;
  days:any;
  date:any;
  sender:any;
  accountnumber:any;
  iban:any;
  transaction_type:any;
  post_box1:any;
  post_box2:any;
  getdate:any;
  updatedAt:any;
  currentdate:any;
  constructor(@Inject (LOCALE_ID) public locale:string) { }
  ngOnInit(): void {
   this.modeldata.map(d=>{
    this.amount=this.moneyFormat(d.amount);
   this.clientname=d.clientname;
   this.days=d.days;
   this.accountnumber=this.formatAccount(d.accountnumber.toString());
   this.sender=d.sender;
   this.date=d.date;
   this.iban=d.iban;
   this.transaction_type=d.transaction_type;
   this.post_box1=d.post_box1;
   this.post_box2=d.post_box2;
   this.updatedAt=d.updated_at;
   this.currentdate=d.current_date;
  })
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

moneyFormat(amount:number){
  const currencyFormat=formatCurrency((amount),this.locale,'USD');
 return currencyFormat;
}

formatAccount(accountnumber:string){
  //split our account number in an array
let split=accountnumber.toString().split('');
//get the index of the array and divide by 2;
let arrayindex=split.length/2;
//divide by 2 floor and add 3 to get the ninth index
let floor=Math.floor(arrayindex+3);
//cut first 9 numbers so we can hide;
let splitData=split.splice(0,floor);
//let join back our sliced data;
 let joinFirst=splitData.join('');
 //let join the remaining data left;
 let joinRemain=split.join('');
 //let combine both the first sliced data and the remaining data;
let account=`${joinFirst}${joinRemain}`;
//let hide the first sliced part with *********
let hidenumber = account.replace(`${joinFirst}`,"******");
return hidenumber;

}

}
