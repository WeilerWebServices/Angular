/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2915Component } from './comp-2915.component';

describe('Comp2915Component', () => {
  let component: Comp2915Component;
  let fixture: ComponentFixture<Comp2915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
