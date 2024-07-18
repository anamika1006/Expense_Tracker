import { Component } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {


  //binding the variable.. so as you open the browser you will have this default values.
  expenseDisc:string="";
  expenseAmt:number=0;
  expenseType:string="";
  expenseCategory:string="";
  expenseDate:Date=new Date();

 //array of type interface
  allExpense:AddExpense[]=[];


  totalBalance: number = 0;
  totalIncome:number=0;
  totalExpenses:number=0;

  addExpense()
  {
    //expense is the oject of the interface 
    let expense: AddExpense=
    {
      id:this.getRandomTaskId(),
      discription:this.expenseDisc,
      amount:this.expenseAmt,
      type:this.expenseType,
      category:this.expenseCategory,
      date:this.expenseDate
    };
    
    this.allExpense.push(expense);
    console.log(this.allExpense);
    this.calculateBalance();


    //restoring the variables to the default value

    
    
  }
  getRandomTaskId(): string {
    const characterSet = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result =
        result +
        characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return result;
  }

  calculateBalance(): void {
    let balance = 0;
    let income=0;
    let Texpense=0;
    this.allExpense.forEach(expense => {
      if (expense.type === 'Income') {
        balance += expense.amount;
        income+=expense.amount;
      } else if (expense.type === 'Expense') {
        balance -= expense.amount;
         Texpense+= expense.amount;
      }
    });
    this.totalBalance = balance;
    this.totalIncome=income;
    this.totalExpenses=Texpense;
  }
  
}

interface AddExpense {
  id: string;
  discription: string;
  amount: number;
  type: string;
  category: string;
  date: Date;
}
