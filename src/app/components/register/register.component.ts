import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  usuarioSeleccionado: string = "paciente";
  imageToUpload:any;
  imageToUpload2:any;

  loading: boolean = false;
  constructor(private fBuilder: FormBuilder, private db: DatabaseService, private route: Router) { 
    this.formRegister = this.fBuilder.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      edad: [0, Validators.required],
      dni: [0, Validators.required],
      email: ["", Validators.email],
      password: ["", Validators.required],
      obraSocial: [""]
    })
  }

  ngOnInit(): void {
  }

  seSeleccionoUsuario(user: string) {
   this.usuarioSeleccionado = user;
  }

  uploadImage(event: any, dato: string) {
    let reader = new FileReader();
    let archivoCapturado = event.target.files[0];
    reader.readAsDataURL(archivoCapturado);
    reader.onloadend = () => {
     dato == 'imageToUpload' ? this.imageToUpload = reader.result : this.imageToUpload2 = reader.result;
    }
  }

  registrar() {
    let datos = {
      fotoPerfil: this.imageToUpload,
      nombre: this.formRegister.controls['nombre'].value,
      apellido: this.formRegister.controls['apellido'].value,
      edad: this.formRegister.controls['edad'].value,
      dni: this.formRegister.controls['dni'].value,
      obraSocial: this.formRegister.controls['obraSocial'].value,
      email: this.formRegister.controls['email'].value,
      password: this.formRegister.controls['password'].value,
      role: this.usuarioSeleccionado
    }
   
   this.loading=true;
   let coleccion = this.usuarioSeleccionado == 'paciente' ? 'Pacientes' : 'Especialista';
    if(this.formRegister.status=='VALID') {
      this.db.alta(coleccion,datos).then(res => {
        console.log(res)
         this.db.onRegister(this.formRegister.controls['email'].value,this.formRegister.controls['password'].value).then(res=> {
         this.db.verificarMailDeConfirmacion();
         this.route.navigate(['/login'])
         this.loading = false
        })
      }).catch(err => this.loading = false);
    }

  }

}
