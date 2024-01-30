import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { SeccioninformativaComponent } from './componentes/seccioninformativa/seccioninformativa.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { TarjetasServiciosComponent } from './componetes/tarjetas-servicios/tarjetas-servicios.component';
import { TarjetasComponent } from './componetes/tarjetas/tarjetas.component';
import { InfocontactenosComponent } from './componentes/infocontactenos/infocontactenos.component';
import { ServicioempresarialComponent } from './componentes/servicioempresarial/servicioempresarial.component';
import { ServiciohogarComponent } from './componentes/serviciohogar/serviciohogar.component';
import { CompraraireComponent } from './componentes/compraraire/compraraire.component';
import { TecnoaliadosComponent } from './componentes/tecnoaliados/tecnoaliados.component';
import { FormulariologinComponent } from './componentes/formulariologin/formulariologin.component';
import { FormularioregistroComponent } from './componentes/formularioregistro/formularioregistro.component';
import { ZonaprivadausuarioComponent } from './componentes/zonaprivadausuario/zonaprivadausuario.component';
import { MenulateralComponent } from './componentes/menulateral/menulateral.component';
import { MenutecnialiadosComponent } from './componentes/menutecnialiados/menutecnialiados.component';
import { ImagenzonaprivadaComponent } from './componentes/imagenzonaprivada/imagenzonaprivada.component';
import { isFormArray } from '@angular/forms';
import { Barravertical2Component } from './componentes/barravertical2/barravertical2.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { RecuperarcontraComponent } from './componentes/recuperarcontra/recuperarcontra.component';
import { CodigorecuperacionComponent } from './componentes/codigorecuperacion/codigorecuperacion.component';
import { RestablecercontraComponent } from './componentes/restablecercontra/restablecercontra.component';
import { ComprasZonaPrivadaComponent } from './componentes/compras-zona-privada/compras-zona-privada.component';
import { MetodosPagosZonaPrivadaComponent } from './componentes/metodos-pagos-zona-privada/metodos-pagos-zona-privada.component';
import { ConfiZonaPrivadaComponent } from './componentes/confi-zona-privada/confi-zona-privada.component';
import { InfoZonaPrivadaComponent } from './componentes/info-zona-privada/info-zona-privada.component';
import { MenuHorizontalZonaPrivadaComponent } from './componentes/menu-horizontal-zona-privada/menu-horizontal-zona-privada.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    ContactenosComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    QuienesSomosComponent,
    CarruselComponent,
    SeccioninformativaComponent,
    ServiciosComponent,
    TarjetasServiciosComponent,
    TarjetasComponent,
    InfocontactenosComponent,
    ServicioempresarialComponent,
    ServiciohogarComponent,
    CompraraireComponent,
    TecnoaliadosComponent,
    FormulariologinComponent,
    FormularioregistroComponent,
    FormularioregistroComponent,
    ZonaprivadausuarioComponent,
    ZonaprivadausuarioComponent,
    MenulateralComponent,
    MenutecnialiadosComponent,
    MenutecnialiadosComponent,
    ImagenzonaprivadaComponent,
    ImagenzonaprivadaComponent,
    Barravertical2Component,
    ComponentesComponent,
    RecuperarcontraComponent,
    CodigorecuperacionComponent,
    RestablecercontraComponent,
    ComprasZonaPrivadaComponent,
    MetodosPagosZonaPrivadaComponent,
    ConfiZonaPrivadaComponent,
    InfoZonaPrivadaComponent,
    MenuHorizontalZonaPrivadaComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }