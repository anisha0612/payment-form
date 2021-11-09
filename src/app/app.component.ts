import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputTypes: string[] = ["name","date","amount"]
  payeeName: string = "";
  receivedDate: string ="";
  payedAmount: number = 0;

  onNameChange(event:any): void{
    this.payeeName = event.target.value;
    
  }
  onDateChange(event:any): void{
    this.receivedDate = event.target.value;
  }

  onAmountChange(event:any): void{
    this.payedAmount = parseFloat(event.target.value)
  }
}
