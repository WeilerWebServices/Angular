/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp229Component } from './comp-229.component';

describe('Comp229Component', () => {
  let component: Comp229Component;
  let fixture: ComponentFixture<Comp229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
