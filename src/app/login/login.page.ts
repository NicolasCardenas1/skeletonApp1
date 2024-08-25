import { Component, OnInit } from '@angular/core';
import {  Router  } from '@angular/router';
//Importmaos el  modulo para trabajar con rutas de angular
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }
  navegarDetalle(){
    this.router.navigate(['/home']); //Navegamos hacia la página de home
  }

  ngOnInit() {
  }

}