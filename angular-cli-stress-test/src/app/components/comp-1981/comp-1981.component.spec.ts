/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1981Component } from './comp-1981.component';

describe('Comp1981Component', () => {
  let component: Comp1981Component;
  let fixture: ComponentFixture<Comp1981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
