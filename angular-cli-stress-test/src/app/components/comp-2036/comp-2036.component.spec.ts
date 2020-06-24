/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2036Component } from './comp-2036.component';

describe('Comp2036Component', () => {
  let component: Comp2036Component;
  let fixture: ComponentFixture<Comp2036Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2036Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
