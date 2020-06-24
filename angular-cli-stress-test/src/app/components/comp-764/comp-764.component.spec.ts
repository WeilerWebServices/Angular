/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp764Component } from './comp-764.component';

describe('Comp764Component', () => {
  let component: Comp764Component;
  let fixture: ComponentFixture<Comp764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
