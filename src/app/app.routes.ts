import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component';
import { ActualizarPacienteComponent } from './components/actualizar-paciente/actualizar-paciente.component';
import { PacientesRegistradosComponent } from './components/pacientes-registrados/pacientes-registrados.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: 'registrarPaciente', component: RegistrarPacienteComponent },
    { path: 'actualizarPaciente/:idPaciente', component: ActualizarPacienteComponent },
    { path: 'registroPaciente', component: PacientesRegistradosComponent },
    { path: '**', pathMatch:'full', redirectTo: 'login' }
];

export const appRouting = RouterModule.forRoot(routes);