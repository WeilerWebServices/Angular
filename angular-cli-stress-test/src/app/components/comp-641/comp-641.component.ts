/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service641Service } from '../../services/service-641.service';

@Component({
  selector: 'app-comp-641',
  templateUrl: './comp-641.component.html',
  styleUrls: ['./comp-641.component.css']
})
export class Comp641Component implements OnInit {

  constructor(private _service: Service641Service) { }

  ngOnInit() {
  }

}
