import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  listaForm : FormGroup;
  listTarea : any;
  datosid: any;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    ) {

    this.listTarea = [];

    this.listaForm = this.fb.group({
      checked: false,
      task :['', Validators.required]
    })

   }

   public add():void{
    this.listTarea.push(this.listaForm.value);
    this.listaForm.controls["task"].reset();
    //this.listaForm.reset();
    console.log(this.listTarea);
  }

  hide(event: any, element: any){
    this.listTarea.forEach((value: any,index: any)=>{
      if(value==element)
      {
        console.log(this.listTarea);
        this.listTarea[index].checked = event.target.checked;
      }
    });
  }

  delete(element: any){
    this.listTarea.forEach((value: any,index: any)=>{
      if(value==element)
      {
        this.listTarea.splice(index,1);
      }
    });
  }

  ngOnInit(): void {
  }

}
