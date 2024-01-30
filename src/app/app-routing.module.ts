import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ServicioempresarialComponent } from './componentes/servicioempresarial/servicioempresarial.component';
import { ServiciohogarComponent } from './componentes/serviciohogar/serviciohogar.component';
import { CompraraireComponent } from './componentes/compraraire/compraraire.component';
import { TecnoaliadosComponent } from './componentes/tecnoaliados/tecnoaliados.component';
import { ZonaprivadausuarioComponent } from './componentes/zonaprivadausuario/zonaprivadausuario.component';
import { RecuperarcontraComponent } from './componentes/recuperarcontra/recuperarcontra.component';
import { CodigorecuperacionComponent } from './componentes/codigorecuperacion/codigorecuperacion.component';
import { RestablecercontraComponent } from './componentes/restablecercontra/restablecercontra.component';
import { ComprasZonaPrivadaComponent } from './componentes/compras-zona-privada/compras-zona-privada.component';
import { ConfiZonaPrivadaComponent } from './componentes/confi-zona-privada/confi-zona-privada.component';
import { MetodosPagosZonaPrivadaComponent } from './componentes/metodos-pagos-zona-privada/metodos-pagos-zona-privada.component';

const routes: Routes = [

  {path:"home",component:HomeComponent,pathMatch:"full"},
  {path:"registro",component:RegistroComponent,pathMatch:"full"},
  {path:"login",component:LoginComponent,pathMatch:"full"},
  {path:"contactenos",component:ContactenosComponent,pathMatch:"full"},
  {path:"quienesSomos",component:QuienesSomosComponent,pathMatch:"full"},
  {path:"servicios",component:ServiciosComponent,pathMatch:"full"},
  {path:"servicios",component:ServiciosComponent,pathMatch:"full"},
  {path:"servicioEmpresarial",component:ServicioempresarialComponent,pathMatch:"full"},
  {path:"serviciosHogar",component:ServiciohogarComponent,pathMatch:"full"},
  {path:"compraraire",component:CompraraireComponent,pathMatch:"full"},
  {path:"tecnoaliados",component:TecnoaliadosComponent,pathMatch:"full"},
  {path:"zonaprivadausuarios",component:ZonaprivadausuarioComponent,pathMatch:"full"},
  {path:"recuperarContraseña",component:RecuperarcontraComponent,pathMatch:"full"},
  {path:"codigoRecuperacion",component:CodigorecuperacionComponent,pathMatch:"full"},
  {path:"restablecerContra",component:RestablecercontraComponent,pathMatch:"full"},
  {path:"comprasZonaPrivada",component:ComprasZonaPrivadaComponent,pathMatch:"full"},
  {path:"confiZonaPrivada",component:ConfiZonaPrivadaComponent,pathMatch:"full"},
  {path:"metodosPagosZonaPrivada",component:MetodosPagosZonaPrivadaComponent,pathMatch:"full"},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
