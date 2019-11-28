import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styles: []
})
export class ActualizarPacienteComponent implements OnInit {
  Formulario: FormGroup;
  private itemDoc: AngularFirestoreDocument<any>;

  public paciente:object={};
  public user:object={}


  constructor(private ActivatedRouter:ActivatedRoute,private afs: AngularFirestore) {
     let id=this.ActivatedRouter.snapshot.params['idPaciente'];
     this.itemDoc=afs.doc<any>(`items/${id}`)

     this.user= JSON.parse( localStorage.getItem('user'))
 


   }

  ngOnInit() {
    this.Formulario= new FormGroup({
      nombre: new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]),
      apPaterno: new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]),
      apMaterno: new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]),
      email: new FormControl(null, [Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      domicilio: new FormControl(null, [Validators.required]),
      estatura: new FormControl(null, [Validators.required,Validators.pattern(/^[0-9]*$/)]),
      peso: new FormControl(null, [Validators.required,Validators.pattern(/^[0-9]*$/)]),
      edad: new FormControl(null, [Validators.required,Validators.maxLength(2),Validators.pattern(/^[0-9]*$/)]),
      telefono: new FormControl(null, [Validators.required]),
      diagnostico: new FormControl(),
      tratamiento: new FormControl()
    })

    this.itemDoc.valueChanges().subscribe(data=>{
      this.paciente=data;
      this.Formulario.patchValue(this.paciente)
    })
  }





  public ActualizarPaciente(){
    
    Swal.fire({
      icon: 'success',
      title: 'Paciente actualizado correctamente',
    
    })
    this.itemDoc.update(this.Formulario.value);


  }



  

}
