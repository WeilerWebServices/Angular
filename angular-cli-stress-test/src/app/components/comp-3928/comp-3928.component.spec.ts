/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3928Component } from './comp-3928.component';

describe('Comp3928Component', () => {
  let component: Comp3928Component;
  let fixture: ComponentFixture<Comp3928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
