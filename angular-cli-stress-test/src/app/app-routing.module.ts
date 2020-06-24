/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Comp1Component } from './components/comp-1/comp-1.component';

const routes: Routes = [
  { path: '', component: Comp1Component },
  { path: 'module1', loadChildren: 'app/modules/module-1/module-1.module#Module1Module' },
  { path: 'module2', loadChildren: 'app/modules/module-2/module-2.module#Module2Module' },
  { path: 'module3', loadChildren: 'app/modules/module-3/module-3.module#Module3Module' },
  { path: 'module4', loadChildren: 'app/modules/module-4/module-4.module#Module4Module' },
  { path: 'module5', loadChildren: 'app/modules/module-5/module-5.module#Module5Module' },
  { path: 'module6', loadChildren: 'app/modules/module-6/module-6.module#Module6Module' },
  { path: 'module7', loadChildren: 'app/modules/module-7/module-7.module#Module7Module' },
  { path: 'module8', loadChildren: 'app/modules/module-8/module-8.module#Module8Module' },
  { path: 'module9', loadChildren: 'app/modules/module-9/module-9.module#Module9Module' },
  { path: 'module10', loadChildren: 'app/modules/module-10/module-10.module#Module10Module' },
  { path: 'module11', loadChildren: 'app/modules/module-11/module-11.module#Module11Module' },
  { path: 'module12', loadChildren: 'app/modules/module-12/module-12.module#Module12Module' },
  { path: 'module13', loadChildren: 'app/modules/module-13/module-13.module#Module13Module' },
  { path: 'module14', loadChildren: 'app/modules/module-14/module-14.module#Module14Module' },
  { path: 'module15', loadChildren: 'app/modules/module-15/module-15.module#Module15Module' },
  { path: 'module16', loadChildren: 'app/modules/module-16/module-16.module#Module16Module' },
  { path: 'module17', loadChildren: 'app/modules/module-17/module-17.module#Module17Module' },
  { path: 'module18', loadChildren: 'app/modules/module-18/module-18.module#Module18Module' },
  { path: 'module19', loadChildren: 'app/modules/module-19/module-19.module#Module19Module' },
  { path: 'module20', loadChildren: 'app/modules/module-20/module-20.module#Module20Module' },
  { path: 'module21', loadChildren: 'app/modules/module-21/module-21.module#Module21Module' },
  { path: 'module22', loadChildren: 'app/modules/module-22/module-22.module#Module22Module' },
  { path: 'module23', loadChildren: 'app/modules/module-23/module-23.module#Module23Module' },
  { path: 'module24', loadChildren: 'app/modules/module-24/module-24.module#Module24Module' },
  { path: 'module25', loadChildren: 'app/modules/module-25/module-25.module#Module25Module' },
  { path: 'module26', loadChildren: 'app/modules/module-26/module-26.module#Module26Module' },
  { path: 'module27', loadChildren: 'app/modules/module-27/module-27.module#Module27Module' },
  { path: 'module28', loadChildren: 'app/modules/module-28/module-28.module#Module28Module' },
  { path: 'module29', loadChildren: 'app/modules/module-29/module-29.module#Module29Module' },
  { path: 'module30', loadChildren: 'app/modules/module-30/module-30.module#Module30Module' },
  { path: 'module31', loadChildren: 'app/modules/module-31/module-31.module#Module31Module' },
  { path: 'module32', loadChildren: 'app/modules/module-32/module-32.module#Module32Module' },
  { path: 'module33', loadChildren: 'app/modules/module-33/module-33.module#Module33Module' },
  { path: 'module34', loadChildren: 'app/modules/module-34/module-34.module#Module34Module' },
  { path: 'module35', loadChildren: 'app/modules/module-35/module-35.module#Module35Module' },
  { path: 'module36', loadChildren: 'app/modules/module-36/module-36.module#Module36Module' },
  { path: 'module37', loadChildren: 'app/modules/module-37/module-37.module#Module37Module' },
  { path: 'module38', loadChildren: 'app/modules/module-38/module-38.module#Module38Module' },
  { path: 'module39', loadChildren: 'app/modules/module-39/module-39.module#Module39Module' },
  { path: 'module40', loadChildren: 'app/modules/module-40/module-40.module#Module40Module' },
  { path: 'module41', loadChildren: 'app/modules/module-41/module-41.module#Module41Module' },
  { path: 'module42', loadChildren: 'app/modules/module-42/module-42.module#Module42Module' },
  { path: 'module43', loadChildren: 'app/modules/module-43/module-43.module#Module43Module' },
  { path: 'module44', loadChildren: 'app/modules/module-44/module-44.module#Module44Module' },
  { path: 'module45', loadChildren: 'app/modules/module-45/module-45.module#Module45Module' },
  { path: 'module46', loadChildren: 'app/modules/module-46/module-46.module#Module46Module' },
  { path: 'module47', loadChildren: 'app/modules/module-47/module-47.module#Module47Module' },
  { path: 'module48', loadChildren: 'app/modules/module-48/module-48.module#Module48Module' },
  { path: 'module49', loadChildren: 'app/modules/module-49/module-49.module#Module49Module' },
  { path: 'module50', loadChildren: 'app/modules/module-50/module-50.module#Module50Module' },
  { path: 'module51', loadChildren: 'app/modules/module-51/module-51.module#Module51Module' },
  { path: 'module52', loadChildren: 'app/modules/module-52/module-52.module#Module52Module' },
  { path: 'module53', loadChildren: 'app/modules/module-53/module-53.module#Module53Module' },
  { path: 'module54', loadChildren: 'app/modules/module-54/module-54.module#Module54Module' },
  { path: 'module55', loadChildren: 'app/modules/module-55/module-55.module#Module55Module' },
  { path: 'module56', loadChildren: 'app/modules/module-56/module-56.module#Module56Module' },
  { path: 'module57', loadChildren: 'app/modules/module-57/module-57.module#Module57Module' },
  { path: 'module58', loadChildren: 'app/modules/module-58/module-58.module#Module58Module' },
  { path: 'module59', loadChildren: 'app/modules/module-59/module-59.module#Module59Module' },
  { path: 'module60', loadChildren: 'app/modules/module-60/module-60.module#Module60Module' },
  { path: 'module61', loadChildren: 'app/modules/module-61/module-61.module#Module61Module' },
  { path: 'module62', loadChildren: 'app/modules/module-62/module-62.module#Module62Module' },
  { path: 'module63', loadChildren: 'app/modules/module-63/module-63.module#Module63Module' },
  { path: 'module64', loadChildren: 'app/modules/module-64/module-64.module#Module64Module' },
  { path: 'module65', loadChildren: 'app/modules/module-65/module-65.module#Module65Module' },
  { path: 'module66', loadChildren: 'app/modules/module-66/module-66.module#Module66Module' },
  { path: 'module67', loadChildren: 'app/modules/module-67/module-67.module#Module67Module' },
  { path: 'module68', loadChildren: 'app/modules/module-68/module-68.module#Module68Module' },
  { path: 'module69', loadChildren: 'app/modules/module-69/module-69.module#Module69Module' },
  { path: 'module70', loadChildren: 'app/modules/module-70/module-70.module#Module70Module' },
  { path: 'module71', loadChildren: 'app/modules/module-71/module-71.module#Module71Module' },
  { path: 'module72', loadChildren: 'app/modules/module-72/module-72.module#Module72Module' },
  { path: 'module73', loadChildren: 'app/modules/module-73/module-73.module#Module73Module' },
  { path: 'module74', loadChildren: 'app/modules/module-74/module-74.module#Module74Module' },
  { path: 'module75', loadChildren: 'app/modules/module-75/module-75.module#Module75Module' },
  { path: 'module76', loadChildren: 'app/modules/module-76/module-76.module#Module76Module' },
  { path: 'module77', loadChildren: 'app/modules/module-77/module-77.module#Module77Module' },
  { path: 'module78', loadChildren: 'app/modules/module-78/module-78.module#Module78Module' },
  { path: 'module79', loadChildren: 'app/modules/module-79/module-79.module#Module79Module' },
  { path: 'module80', loadChildren: 'app/modules/module-80/module-80.module#Module80Module' },
  { path: 'module81', loadChildren: 'app/modules/module-81/module-81.module#Module81Module' },
  { path: 'module82', loadChildren: 'app/modules/module-82/module-82.module#Module82Module' },
  { path: 'module83', loadChildren: 'app/modules/module-83/module-83.module#Module83Module' },
  { path: 'module84', loadChildren: 'app/modules/module-84/module-84.module#Module84Module' },
  { path: 'module85', loadChildren: 'app/modules/module-85/module-85.module#Module85Module' },
  { path: 'module86', loadChildren: 'app/modules/module-86/module-86.module#Module86Module' },
  { path: 'module87', loadChildren: 'app/modules/module-87/module-87.module#Module87Module' },
  { path: 'module88', loadChildren: 'app/modules/module-88/module-88.module#Module88Module' },
  { path: 'module89', loadChildren: 'app/modules/module-89/module-89.module#Module89Module' },
  { path: 'module90', loadChildren: 'app/modules/module-90/module-90.module#Module90Module' },
  { path: 'module91', loadChildren: 'app/modules/module-91/module-91.module#Module91Module' },
  { path: 'module92', loadChildren: 'app/modules/module-92/module-92.module#Module92Module' },
  { path: 'module93', loadChildren: 'app/modules/module-93/module-93.module#Module93Module' },
  { path: 'module94', loadChildren: 'app/modules/module-94/module-94.module#Module94Module' },
  { path: 'module95', loadChildren: 'app/modules/module-95/module-95.module#Module95Module' },
  { path: 'module96', loadChildren: 'app/modules/module-96/module-96.module#Module96Module' },
  { path: 'module97', loadChildren: 'app/modules/module-97/module-97.module#Module97Module' },
  { path: 'module98', loadChildren: 'app/modules/module-98/module-98.module#Module98Module' },
  { path: 'module99', loadChildren: 'app/modules/module-99/module-99.module#Module99Module' },
  { path: 'module100', loadChildren: 'app/modules/module-100/module-100.module#Module100Module' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }