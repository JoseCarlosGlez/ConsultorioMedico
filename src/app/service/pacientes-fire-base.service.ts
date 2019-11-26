import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PacientesFireBaseService {
  items: Observable<any>;


  constructor(public db: AngularFirestore) { }

  public getUser(){




  }
}
