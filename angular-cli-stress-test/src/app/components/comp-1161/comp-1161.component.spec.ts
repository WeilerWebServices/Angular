/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1161Component } from './comp-1161.component';

describe('Comp1161Component', () => {
  let component: Comp1161Component;
  let fixture: ComponentFixture<Comp1161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
