import {Component} from '@angular/core';


@Component({
    selector:'my-sample',
    template:`<h2 class="myClass">This is a sample calculator App</h2>
             Enter the Numbers:  <input type="text" #value1 [(ngModel)]="name1">
             <span>{{icon}}</span>
             <input type="text" #value2 [(ngModel)]="name2">
             ={{result}}<br><br>
             Choose Operation: <button (click)="add(value1.value,value2.value)">+</button>
                                <button (click)="sub(value1.value,value2.value)">-</button>
                                <button (click)="div(value1.value,value2.value)">/</button>
                                <button (click)="mul(value1.value,value2.value)">*</button>
             <br><br>
             <button class="btn btn-primary" (click)="onClick(value1.value)">Click Me!</button>
             <div [ngSwitch]="colour">
             <p *ngSwitch when="red">red is shown</p>
             <p *ngDefault>Invalid Color is shown</p>
             </div>
             `,
    styles:[`
        .myClass {
            color:red
    } 
        span{
        color:red    
        }`
    ]
})
export class SampleClass{
    public name1;
    public name2;
    public result;
    public icon;
    public colour="red";
    public colors=["red","blue"];
    onClick(value){
        console.log(value);
        this.name1='';
        this.name2='';
        this.result='';
        this.icon='';
    }   
    add(value1,value2){
        this.icon='+';
        this.result= parseInt(value1) + parseInt(value2);
    }
    sub(value1,value2){
        this.icon='-';
        this.result= parseInt(value1) - parseInt(value2);
    }
    mul(value1,value2){
        this.icon='*';
        this.result= parseInt(value1) * parseInt(value2);
    }
    div(value1,value2){
        this.icon='/';
        this.result= parseInt(value1) / parseInt(value2);
    }
}