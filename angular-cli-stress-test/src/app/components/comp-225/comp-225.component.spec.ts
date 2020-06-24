/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp225Component } from './comp-225.component';

describe('Comp225Component', () => {
  let component: Comp225Component;
  let fixture: ComponentFixture<Comp225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
