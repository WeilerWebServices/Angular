/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4509Component } from './comp-4509.component';

describe('Comp4509Component', () => {
  let component: Comp4509Component;
  let fixture: ComponentFixture<Comp4509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
