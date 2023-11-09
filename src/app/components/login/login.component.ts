import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    password: ''
  };
  form: FormGroup;

  status='HABILITADO'
  loading: boolean = false;
  constructor(private db:DatabaseService, private route:Router, private fb: FormBuilder) { 
    this.form = this.fb.group({
      mail: ["", Validators.email],
      password: ["", Validators.required],
    })
  }

  async ngOnInit() {
    // this.loading=true;
    // setTimeout(() => {
    //   this.loading=false;
    // }, 2000);
    // this.db.onRegister('lucia.t.cardozo@gmail.com','123456').then(res=> {
    //   console.log(res)
    //   this.db.verificarMailDeConfirmacion()
    // })
    
  }

  async login() {
    if(this.form.status == 'VALID') {
      const email: any = await this.db.onLogin(this.form.controls['mail'].value,this.form.controls['password'].value)
      if(email && email.user.emailVerified) {
        console.log(email.user.emailVerified)
        this.route.navigate(['/welcome'])
      } else {
        this.route.navigate(['/emailVerified']);
      }
    }
    console.log(this.form.status)
    console.log(this.form.controls['mail'].value, this.form.controls['password'].value)

  }

}
