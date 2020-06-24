/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3126Component } from './comp-3126.component';

describe('Comp3126Component', () => {
  let component: Comp3126Component;
  let fixture: ComponentFixture<Comp3126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
