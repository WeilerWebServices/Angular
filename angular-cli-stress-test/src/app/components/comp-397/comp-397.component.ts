/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service397Service } from '../../services/service-397.service';

@Component({
  selector: 'app-comp-397',
  templateUrl: './comp-397.component.html',
  styleUrls: ['./comp-397.component.css']
})
export class Comp397Component implements OnInit {

  constructor(private _service: Service397Service) { }

  ngOnInit() {
  }

}
