/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp651Component } from './comp-651.component';

describe('Comp651Component', () => {
  let component: Comp651Component;
  let fixture: ComponentFixture<Comp651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
