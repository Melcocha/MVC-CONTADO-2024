import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MenuLateral } from '../interfaces/menu';
import { MenuOpcionService } from 'src/app/services/menuOpcion/menu-opcion.service';
import { Router } from '@angular/router';
//interfaces/Contabilidad/menucontabilidad';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  public tituloS:string="";
  public menus: Array<MenuLateral> = []

  constructor(public service:DataService,public opcionMenuService:MenuOpcionService, private router: Router) { }

  ngOnInit() {
    this.opcionMenuService.changeString.subscribe((opcion)=>{
      this.menus = this.menu(this.opcionMenuService.getDatos());
      this.router.navigate([this.menus[1].ruta])
      this.tituloS = this.menus[1].titulo;
    });
    
    /* Después de iniciar sesión se cargará esta opción por defecto */
    this.menus = this.menu("contabilidad");
    this.service.toggleMenuOption(2);
  }

  menu(valor:string){
    let menu : object = {
      "configuracion": [
        {titulo: "Configuración", logo: "../assets/iconos/IconoConfiguración-Gris.png"},
        {titulo: "Perfil de usuario", logo: "../assets/iconos/IconoConfiguración-Gris.png", ruta: "/configuracion/perfil"},
        {titulo: "Registro de usuarios", logo: "../assets/iconos/IconoConfiguración-Gris.png", ruta: "/configuracion/registro/usuarios"},
        {titulo: "Registro de contabilidades", logo: "../assets/iconos/IconoConfiguración-Gris.png", ruta: "/configuracion/registro/contabilidades"},
        {titulo: "Historial de cambios", logo: "../assets/iconos/IconoConfiguración-Gris.png", ruta: "/configuracion/historial-cambios"}
      ],
      "contabilidad":[
        {titulo: "Contabilidad", logo: "../../../assets/iconos/Logo-Contabilidad.png"},
        {titulo: "Registros", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: "/contabilidad/registros"},
        /*{titulo: "Registro clientes", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""},*/
        /*{titulo: "Registro proveedores", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""},*/
        {titulo: "Factura de credito fiscal", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: "/contabilidad/documentodte/creditofiscal"},
        {titulo: "Factura de consumidor final", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: "/contabilidad/documentodte/consumidorfinal"}
      ],
      "finanzas":[
        {titulo: "Finanzas", logo: "../../../assets/iconos/Logo-Contabilidad.png"},
        {titulo: "Inicio", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: "/finanzas/finanzasinicio"},
        /*{titulo: "Base Legal", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""},
        {titulo: "Ordenes", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""},
        {titulo: "Quedan", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""},
        {titulo: "C.X Pagan", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""},
        {titulo: "Anticipos", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""},
        {titulo: "Estados de Cuenta", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""},
        {titulo: "Compras Locales", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""},
        {titulo: "Importaciones Internacionales", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""},
        {titulo: "Informes de Compras", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""},
        {titulo: "Registro F. Sujeto Excluido", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: ""}*/
      ],
      "rrhh":[
        {titulo: "RRHH", logo: "../../../assets/iconos/Logo-Contabilidad.png"},
        {titulo: "Inicio", logo: "../../../assets/iconos/Logo-Contabilidad.png",ruta: "/rrhh/inicio"},
      ]
    }
    return menu[valor as keyof typeof menu];
  }

}
