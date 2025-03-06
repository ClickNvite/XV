// inicio.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { InvitadoModule } from '../invitado/invitado.module';
import { RecepcionModule } from '../recepcion/recepcion.module';
import { ContadorModule } from '../contador/contador.module';
import { DresscodeModule } from '../dresscode/dresscode.module';
import { CalendarioModule } from '../calendario/calendario.module';
import { BancModule } from '../banc/banc.module';
import { FooterModule } from '../footer/footer.module';

const routes: Routes = [
  { path: '', component: InicioComponent }
];

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InvitadoModule,
    RecepcionModule,
    ContadorModule,
    DresscodeModule,
    CalendarioModule,
    BancModule,
    FooterModule
  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }



// // inicio.module.ts
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// import { InicioComponent } from './inicio.component';
// import { InvitadoModule } from '../invitado/invitado.module';
// import { RecepcionModule } from '../recepcion/recepcion.module';
// import { ContadorModule } from '../contador/contador.module';
// import { DresscodeModule } from '../dresscode/dresscode.module';
// import { CalendarioModule } from '../calendario/calendario.module';
// import { BancModule } from '../banc/banc.module';

// const routes: Routes = [
//   { path: '', component: InicioComponent }
// ];

// @NgModule({
//   declarations: [
//     InicioComponent
//   ],
//   imports: [
//     CommonModule,
//     InvitadoModule,
//     RecepcionModule,
//     ContadorModule,
//     DresscodeModule,
//     CalendarioModule,
//     BancModule,
//     RouterModule.forChild(routes),
//   ],
//   exports: [
//     InicioComponent,
//     InvitadoModule,
//      RecepcionModule,
//      ContadorModule,
//      DresscodeModule,
//      CalendarioModule,
//      BancModule
//   ]
// })
// export class InicioModule { }



// // import { NgModule } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { InicioComponent } from './inicio.component';
// // import { InvitadoModule } from '../invitado/invitado.module'; // Importa el módulo de Invitado si es necesario
// // import { RecepcionModule } from '../recepcion/recepcion.module'; // Importa el módulo de Recepcion si es necesario
// // import { ContadorModule } from '../contador/contador.module'; // Importa el módulo de Contador si es necesario
// // import { DresscodeModule } from '../dresscode/dresscode.module'; // Importa el módulo de Dresscode si es necesario
// // import { CalendarioModule } from '../calendario/calendario.module'; // Importa el módulo de Calendario si es necesario
// // import { BancModule } from '../banc/banc.module'; // Importa el módulo de Banc si es necesario
// // import { RouterModule } from '@angular/router';

// // @NgModule({
// //   declarations: [
// //     InicioComponent
// //   ],
// //   imports: [
// //     CommonModule,
// //     RouterModule,
// //     InvitadoModule, // Asegúrate de importar todos los módulos necesarios aquí
// //     RecepcionModule,
// //     ContadorModule,
// //     DresscodeModule,
// //     CalendarioModule,
// //     BancModule
// //   ],
// //   exports: [
// //     InicioComponent,
// //     InvitadoModule,
// //     RecepcionModule,
// //     ContadorModule,
// //     DresscodeModule,
// //     CalendarioModule,
// //     BancModule
// //     // Puedes añadir otros módulos que necesites exportar
// //   ]
// // })
// // export class InicioModule { }
