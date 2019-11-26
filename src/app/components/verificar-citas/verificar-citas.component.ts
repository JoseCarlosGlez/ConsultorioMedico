import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verificar-citas',
  templateUrl: './verificar-citas.component.html',
  styles: []
})
export class VerificarCitasComponent implements OnInit {

  public Citas={};

  constructor(private db: AngularFirestore, private router:Router) {
    this.db.collection('Citas').valueChanges().subscribe(data=>{
      this.Citas=data
      this.db.collection('Citas').snapshotChanges().subscribe(data=>{
        for (const key in data) {

          this.Citas[key].id=data[key].payload.doc.id;
          console.log(this.Citas)
       
        }
      })
    })
   }

  ngOnInit() {
  }


  ActualizarCita(id){

    this.router.navigate(['/EditarCitas',id])
    

  }
  EliminarCita(id){


    Swal.fire({
      title: 'Eliminar?',
      text: "Esta accion es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!'
    }).then((result) => {
      if (result.value) {

        let itemsCollection = this.db.collection<any>(`Citas`);

        itemsCollection.doc(id).delete();
        Swal.fire(
          'Borrado!',
          'Cita Eliminada.',
          'success'
        )
      }
    })
    
 


  }

}
