/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2657Component } from './comp-2657.component';

describe('Comp2657Component', () => {
  let component: Comp2657Component;
  let fixture: ComponentFixture<Comp2657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
