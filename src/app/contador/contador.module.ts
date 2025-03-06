// contador.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador.component';

@NgModule({
  declarations: [ContadorComponent],
  imports: [CommonModule],
  exports: [ContadorComponent]
})
export class ContadorModule { }



// // contador.module.ts
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// import { ContadorComponent } from './contador.component';

// const routes: Routes = [
//   { path: '', component: ContadorComponent }
// ];

// @NgModule({
//   declarations: [
//     ContadorComponent
//   ],
//   imports: [
//     CommonModule,
//     RouterModule.forChild(routes)
//   ],
//   exports: [
//     ContadorComponent
//   ]
// })
// export class ContadorModule { }




// // import { NgModule } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { ContadorComponent } from './contador.component';

// // @NgModule({
// //   declarations: [
// //     ContadorComponent
// //   ],
// //   imports: [
// //     CommonModule
// //   ],
// //   exports: [
// //     ContadorComponent
// //   ]
// // })
// // export class ContadorModule { }
