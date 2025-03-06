import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { InvitadoComponent } from './invitado/invitado.component';
import { CeremoniaComponent } from './ceremonia/ceremonia.component';
import { RecepcionComponent } from './recepcion/recepcion.component';
import { ContadorComponent } from './contador/contador.component';
import { DresscodeComponent } from './dresscode/dresscode.component';
import { CalendarioComponent } from './calendario/calendario.component';

import { BancComponent } from './banc/banc.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { VerifiComponent } from './verifi/verifi.component';
import { RouterModule } from '@angular/router';
import * as Aos from 'aos';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { AnalyticsService } from './analytics.service';


@NgModule({
  declarations: [
    AppComponent,
    VerifiComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
    HttpClientModule,




  ],
  providers: [AnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
