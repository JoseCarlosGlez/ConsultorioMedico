import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
      nombre: new FormControl(),
      apPaterno: new FormControl(),
      apMaterno: new FormControl(),
      email: new FormControl(),
      domicilio: new FormControl(),
      estatura: new FormControl(),
      peso: new FormControl()
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
