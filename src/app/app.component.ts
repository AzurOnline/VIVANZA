import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import * as Chart from '../../node_modules/chart.js';
import { ApiService } from './services/api.service.js';
import { isPlatformBrowser } from '@angular/common';
//import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { AuthService } from './services/auth.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  blankUrl = '';
  currentUrl: string;
  checkoutUrls = ['/login'];

  public id;
  public gruposLogin;
  public menus;
  public MODULOSPORGRUPO = [];
  public grupoModulos;
  public modulos;

  // public MODULOSPORGRUPO = [];

  constructor(
    public apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.id = localStorage.getItem('id');

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl = event.url;
      /* console.log(this.activatedRoute.root);
      alert("navigating" + this.activatedRoute.root); */
    });


    /*     this.activatedRoute.url.subscribe(url => {
          console.log(url);

        }); */


  }


  showSpinner() {
    document.getElementById("spinner-back").classList.add("show");
    document.getElementById("spinner-front").classList.add("show");
  }
  hideSpinner() {
    document.getElementById("spinner-back").classList.remove("show");
    document.getElementById("spinner-front").classList.remove("show");
  }


  isCheckoutRoute() {
    if (!this.currentUrl) {
      return false;
    }
    const index = this.checkoutUrls.indexOf(this.currentUrl);
    if (index >= 0) {
      return true;
    } else {
      return false;
    }
  }

  title = 'Vivanza';

  ngOnInit() {
    //this.showSpinner();
    this.id = localStorage.getItem('id');
    this.GeneraMenu();


  }

  Filtrar(nombre_grupo) {

    return this.modulos.filter(function (item) { return (item.nombre_grupo == nombre_grupo); });
  }


  GeneraMenu() {

    this.id = localStorage.getItem('id');
    /* this.MODULOSPORGRUPO = JSON.parse(localStorage.getItem('MODULOSPORGRUPO')); */
    if (this.MODULOSPORGRUPO.length <= 0) {

      let data = {
        "appname": "VIVANZAJR",
        "sp": "Trae_Modulos_Web_Usuario",
        "params": [parseInt(this.id)]

      }

      this.apiService.ejecuta(data).subscribe((response) => {
        let _response;
        _response = response;


        this.menus = _response.success.recordsets[1];
        this.modulos = _response.success.recordsets[0];

        this.menus.forEach(value => {
          this.grupoModulos = {
            'idgrupo': value.id_grupo,
            'nombre_grupo': value.nombre_grupo,
            'modulos': []
          }

          this.modulos = _response.success.recordsets[0];
          this.modulos = this.Filtrar(value.nombre_grupo);

          this.modulos.forEach(value => {
            this.grupoModulos['modulos'].push(value);
          })

          this.MODULOSPORGRUPO.push(this.grupoModulos);


        })

        //localStorage.setItem('MODULOSPORGRUPO', JSON.stringify(this.MODULOSPORGRUPO));

      })

    }

  }




}
