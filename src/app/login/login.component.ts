import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = "";
  clave: string = "";
  mensaje: string = "";
  error: string = "";
  loginForm : FormGroup;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private toastr: ToastrService
    ) {
    this.loginForm = this.fb.group({
      checked: false,
      task :['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  Submit(){

    if (this.usuario == "test01" && this.clave == "test01"){
      this.router.navigate([
        'tasks',
    ]);
    }else{
      this.toastr.warning("Datos equivocados","Error");
    }

  console.log("form Subido");
}

}
