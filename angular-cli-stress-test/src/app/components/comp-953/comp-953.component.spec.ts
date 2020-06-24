/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp953Component } from './comp-953.component';

describe('Comp953Component', () => {
  let component: Comp953Component;
  let fixture: ComponentFixture<Comp953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
