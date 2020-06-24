/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module40CompComponent } from './components/module-40-comp/module-40-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module40CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module40RoutingModule { }
