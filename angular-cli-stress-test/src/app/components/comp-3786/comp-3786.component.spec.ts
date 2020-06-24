/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3786Component } from './comp-3786.component';

describe('Comp3786Component', () => {
  let component: Comp3786Component;
  let fixture: ComponentFixture<Comp3786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
