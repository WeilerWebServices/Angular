/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp940Component } from './comp-940.component';

describe('Comp940Component', () => {
  let component: Comp940Component;
  let fixture: ComponentFixture<Comp940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
