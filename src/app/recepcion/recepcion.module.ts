// recepcion.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecepcionComponent } from './recepcion.component';

@NgModule({
  declarations: [RecepcionComponent],
  imports: [CommonModule],
  exports: [RecepcionComponent]
})
export class RecepcionModule { }

// // recepcion.module.ts
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// import { RecepcionComponent } from './recepcion.component';

// const routes: Routes = [
//   { path: '', component: RecepcionComponent }
// ];

// @NgModule({
//   declarations: [
//     RecepcionComponent
//   ],
//   imports: [
//     CommonModule,
//     RouterModule.forChild(routes)
//   ],
//   exports: [
//     RecepcionComponent
//   ]
// })
// export class RecepcionModule { }
