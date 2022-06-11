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

    let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let taskAdd = this.listaForm.controls["task"].value;

    if( taskAdd == null || taskAdd == "" ){
      return;
    }else if (spChars.test(taskAdd)) {
      return;
    }

    this.listTarea.push(this.listaForm.value);
    this.listaForm.controls["task"].reset();
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

  validate(event: { keyCode: number; preventDefault: () => void; }) {

    var validate = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(validate)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  ngOnInit(): void {
  }

}
