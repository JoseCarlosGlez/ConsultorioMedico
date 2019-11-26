import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  public GotoPrincipal(username, password){

    if(username=="DoctorHakaru"&&password=="123"||username=='yareli'&&password=="456"){
      this.router.navigate(['/principal'])
       localStorage.setItem('user', JSON.stringify(username));
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Nombre de usuario o contraseña incorrecta',
        
      })
  

    }



  
  

    

    

  }

}
