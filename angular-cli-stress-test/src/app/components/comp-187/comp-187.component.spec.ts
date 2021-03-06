/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp187Component } from './comp-187.component';

describe('Comp187Component', () => {
  let component: Comp187Component;
  let fixture: ComponentFixture<Comp187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
