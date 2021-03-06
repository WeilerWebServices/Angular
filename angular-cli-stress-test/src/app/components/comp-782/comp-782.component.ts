/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service782Service } from '../../services/service-782.service';

@Component({
  selector: 'app-comp-782',
  templateUrl: './comp-782.component.html',
  styleUrls: ['./comp-782.component.css']
})
export class Comp782Component implements OnInit {

  constructor(private _service: Service782Service) { }

  ngOnInit() {
  }

}
