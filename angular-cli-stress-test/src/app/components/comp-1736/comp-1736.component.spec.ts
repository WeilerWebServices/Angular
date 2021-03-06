/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1736Component } from './comp-1736.component';

describe('Comp1736Component', () => {
  let component: Comp1736Component;
  let fixture: ComponentFixture<Comp1736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
