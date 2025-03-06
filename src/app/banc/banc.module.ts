// banc.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BancComponent } from './banc.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [BancComponent],
  imports: [CommonModule,
    SweetAlert2Module.forRoot()
  ],
  exports: [BancComponent]
})
export class BancModule { }



// // banc.module.ts
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// import { BancComponent } from './banc.component';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// const routes: Routes = [
//   { path: '', component: BancComponent }
// ];

// @NgModule({
//   declarations: [
//     BancComponent
//   ],
//   imports: [
//     CommonModule,
//     SweetAlert2Module.forRoot(),
//     RouterModule.forChild(routes)
//   ],
//   exports: [
//     BancComponent
//   ]
// })
// export class BancModule { }



// // // banc.module.ts
// // import { RouterModule, Routes } from '@angular/router';
// // import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// // import { NgModule } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { BancComponent } from './banc.component';

// // @NgModule({
// //   declarations: [
// //     BancComponent
// //   ],
// //   imports: [
// //     CommonModule,
// //     SweetAlert2Module,

// //   ],
// //   exports: [
// //     BancComponent
// //   ]
// // })
// // export class BancModule { }
