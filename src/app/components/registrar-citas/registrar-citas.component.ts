import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registrar-citas',
  templateUrl: './registrar-citas.component.html',
  styles: []
})
export class RegistrarCitasComponent implements OnInit {

  public Formulario:FormGroup
  private itemsCollection: AngularFirestoreCollection<any>;


  constructor(public afs:AngularFirestore) { 
    this.itemsCollection=this.afs.collection<any>('Citas')

  }

  ngOnInit() {
    this.Formulario=new FormGroup({
      NombrePaciente:new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/),Validators.minLength(8)]),
      Fecha:new FormControl(null, [Validators.required])
    })
  }

  GuardarCita(){
    this.itemsCollection.add(this.Formulario.value)

    this.Formulario.reset();

   
    Swal.fire({
      icon: 'success',
      title: 'Paciente guardado correctamente',
    
    })
  }

}
