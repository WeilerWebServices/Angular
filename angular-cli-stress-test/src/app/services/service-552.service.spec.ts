/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service552Service } from './service-552.service';

describe('Service552Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service552Service]
    });
  });

  it('should ...', inject([Service552Service], (service: Service552Service) => {
    expect(service).toBeTruthy();
  }));
});
