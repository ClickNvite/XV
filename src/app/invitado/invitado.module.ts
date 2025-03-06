// invitado.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitadoComponent } from './invitado.component';

@NgModule({
  declarations: [InvitadoComponent],
  imports: [CommonModule],
  exports: [InvitadoComponent]
})
export class InvitadoModule { }


// // invitado.module.ts
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// import { InvitadoComponent } from './invitado.component';

// const routes: Routes = [
//   { path: '', component: InvitadoComponent }
// ];

// @NgModule({
//   declarations: [
//     InvitadoComponent
//   ],
//   imports: [
//     CommonModule,
//     RouterModule.forChild(routes)
//   ],
//   exports: [
//     InvitadoComponent
//   ]
// })
// export class InvitadoModule { }



// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { InvitadoComponent } from './invitado.component';

// @NgModule({
//   declarations: [
//     InvitadoComponent
//   ],
//   imports: [
//     CommonModule
//   ],
//   exports: [
//     InvitadoComponent // Asegúrate de exportar el componente si es necesario
//   ]
// })
// export class InvitadoModule { }
