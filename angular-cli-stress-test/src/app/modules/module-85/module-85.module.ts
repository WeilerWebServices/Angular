/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module85RoutingModule } from './module-85-routing.module';
import { Module85CompComponent } from './components/module-85-comp/module-85-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module85RoutingModule
  ],
  declarations: [Module85CompComponent]
})
export class Module85Module { }
