/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2133Component } from './comp-2133.component';

describe('Comp2133Component', () => {
  let component: Comp2133Component;
  let fixture: ComponentFixture<Comp2133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
