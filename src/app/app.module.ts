import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import {AngularFontAwesomeModule } from 'angular-font-awesome';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component'
import { appRouting } from './app.routes';
import { PrincipalComponent } from './components/principal/principal.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';
import { ActualizarPacienteComponent } from './components/actualizar-paciente/actualizar-paciente.component'
import {  AngularFireModule   } from '@angular/fire'
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PacientesRegistradosComponent } from './components/pacientes-registrados/pacientes-registrados.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarPacienteComponent,
    PrincipalComponent,
    ActualizarPacienteComponent,
    PacientesRegistradosComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    appRouting,
    SweetAlert2Module,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
