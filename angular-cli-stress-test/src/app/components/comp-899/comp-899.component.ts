/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service899Service } from '../../services/service-899.service';

@Component({
  selector: 'app-comp-899',
  templateUrl: './comp-899.component.html',
  styleUrls: ['./comp-899.component.css']
})
export class Comp899Component implements OnInit {

  constructor(private _service: Service899Service) { }

  ngOnInit() {
  }

}
