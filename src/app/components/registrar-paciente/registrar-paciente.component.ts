import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styles: []
})
export class RegistrarPacienteComponent implements OnInit {

  public Formulario:FormGroup;
  private itemsCollection: AngularFirestoreCollection<any>;
  
  constructor(public afs:AngularFirestore) {
    this.itemsCollection=this.afs.collection<any>('items')
   }

  ngOnInit() {
    this.Formulario= new FormGroup({
      nombre: new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]),
      apPaterno: new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]),
      apMaterno: new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]),
      email: new FormControl(null, [Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      domicilio: new FormControl(null, [Validators.required]),
      estatura: new FormControl(null, [Validators.required,Validators.pattern(/^[0-9]*$/)]),
      peso: new FormControl(null, [Validators.required,Validators.pattern(/^[0-9]*$/)])
    

    })
  }


  SaveUser(){


    Swal.fire({
      icon: 'success',
      title: 'Paciente guardado correctamente',
    
    })


    this.itemsCollection.add(this.Formulario.value)

    this.Formulario.reset();
  }

}
