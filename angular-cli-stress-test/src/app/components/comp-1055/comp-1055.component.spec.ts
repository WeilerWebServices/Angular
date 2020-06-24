/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1055Component } from './comp-1055.component';

describe('Comp1055Component', () => {
  let component: Comp1055Component;
  let fixture: ComponentFixture<Comp1055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
