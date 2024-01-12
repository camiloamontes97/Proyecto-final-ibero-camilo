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
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
