/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service932Service } from '../../services/service-932.service';

@Component({
  selector: 'app-comp-932',
  templateUrl: './comp-932.component.html',
  styleUrls: ['./comp-932.component.css']
})
export class Comp932Component implements OnInit {

  constructor(private _service: Service932Service) { }

  ngOnInit() {
  }

}
