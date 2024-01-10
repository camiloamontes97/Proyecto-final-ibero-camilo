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
    TarjetasComponent
    
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