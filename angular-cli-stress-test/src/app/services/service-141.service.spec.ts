/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service141Service } from './service-141.service';

describe('Service141Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service141Service]
    });
  });

  it('should ...', inject([Service141Service], (service: Service141Service) => {
    expect(service).toBeTruthy();
  }));
});
