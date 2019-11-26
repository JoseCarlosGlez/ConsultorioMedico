import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';
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
      nombre: new FormControl(),
      apPaterno: new FormControl(),
      apMaterno: new FormControl(),
      email: new FormControl(),
      domicilio: new FormControl(),
      estatura: new FormControl(),
      peso: new FormControl()

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
