import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentSnapshot, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes-registrados',
  templateUrl: './pacientes-registrados.component.html',
  styles: []
})
export class PacientesRegistradosComponent implements OnInit {
  pacientes:Array<any>=[];
  pacientesAuxiliar:Array<any>=[];


  constructor(public db: AngularFirestore,private router:Router) { 
    this.db.collection('items').valueChanges().subscribe(data=>{
      this.pacientes=data;
      this.db.collection('items').snapshotChanges().subscribe((data:any)=>{

    
        
        for (const key in data) {
          this.pacientes[key].id=data[key].payload.doc.id
        }

        this.pacientesAuxiliar=this.pacientes
     
        
      })
      
    })


  }

  ngOnInit() {
  }


  editarPaciente(id){
    console.log(id)
    this.router.navigate(['actualizarPaciente',id])

  }

  public BuscarPaciente(Correo){
    let auxiliar =this.pacientes;
   this.pacientes= this.pacientes.filter(data=>{
     if(data.email.indexOf(Correo)!==-1){
       return data
     }
   })
   console.log(this.pacientes)
  }


  limpiarBusqueda(){

    this.pacientes=this.pacientesAuxiliar;
  }

}
