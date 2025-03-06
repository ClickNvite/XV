import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifiComponent } from './verifi/verifi.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/verifi', pathMatch: 'full' },
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'banc', loadChildren: () => import('./banc/banc.module').then(m => m.BancModule) },
  { path: 'calendario', loadChildren: () => import('./calendario/calendario.module').then(m => m.CalendarioModule) },
  { path: 'contador', loadChildren: () => import('./contador/contador.module').then(m => m.ContadorModule) },
  { path: 'dresscode', loadChildren: () => import('./dresscode/dresscode.module').then(m => m.DresscodeModule) },
  { path: 'invitado', loadChildren: () => import('./invitado/invitado.module').then(m => m.InvitadoModule) },
  { path: 'recepcion', loadChildren: () => import('./recepcion/recepcion.module').then(m => m.RecepcionModule) },
  { path: 'footer', loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule) },
  { path: 'verifi', component: VerifiComponent },
  { path: '**', redirectTo: '/verifi' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Activar HashLocationStrategy
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }] // Proveer HashLocationStrategy
})
export class AppRoutingModule { }
