/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1470Component } from './comp-1470.component';

describe('Comp1470Component', () => {
  let component: Comp1470Component;
  let fixture: ComponentFixture<Comp1470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
