// calendario.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario.component';

@NgModule({
  declarations: [CalendarioComponent],
  imports: [CommonModule],
  exports: [CalendarioComponent]
})
export class CalendarioModule { }




// // calendario.module.ts
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// import { CalendarioComponent } from './calendario.component';

// const routes: Routes = [
//   { path: '', component: CalendarioComponent }
// ];

// @NgModule({
//   declarations: [
//     CalendarioComponent
//   ],
//   imports: [
//     CommonModule,
//     RouterModule.forChild(routes)
//   ],
//   exports: [
//     CalendarioComponent
//   ]
// })
// export class CalendarioModule { }



// // import { NgModule } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { CalendarioComponent } from './calendario.component';

// // @NgModule({
// //   declarations: [
// //     CalendarioComponent
// //   ],
// //   imports: [
// //     CommonModule
// //   ],
// //   exports: [
// //     CalendarioComponent
// //   ]
// // })
// // export class CalendarioModule { }
