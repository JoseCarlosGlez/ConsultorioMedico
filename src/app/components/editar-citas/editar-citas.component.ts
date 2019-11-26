import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-citas',
  templateUrl: './editar-citas.component.html',
  styles: []
})
export class EditarCitasComponent implements OnInit {


  public idCita:string="";
  public cita={}
  private itemDoc: AngularFirestoreDocument<any>;
  public Formulario:FormGroup;

  constructor(private ActivatedRoute:ActivatedRoute,private afs: AngularFirestore) {
    this.idCita= this.ActivatedRoute.snapshot.params.idCita;
    console.log(this.idCita)
    this.itemDoc = afs.doc<any>(`Citas/${this.idCita}`);


   }

  ngOnInit() {
    this.Formulario=new FormGroup({
      NombrePaciente:new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/),Validators.minLength(8)]),
      Fecha:new FormControl(null, [Validators.required])
    })

    this.itemDoc.valueChanges().subscribe(data=>{
      
      this.cita=data;
      console.log(this.cita)
      this.Formulario.patchValue(this.cita);


    })

  }


  updateCita(){

    Swal.fire({
      icon: 'success',
      title: 'Paciente actualizado correctamente',
    })
    this.itemDoc.update(this.Formulario.value)
  }

}
