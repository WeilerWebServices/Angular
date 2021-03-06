/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service100Service } from '../../services/service-100.service';

@Component({
  selector: 'app-comp-100',
  templateUrl: './comp-100.component.html',
  styleUrls: ['./comp-100.component.css']
})
export class Comp100Component implements OnInit {

  constructor(private _service: Service100Service) { }

  ngOnInit() {
  }

}
