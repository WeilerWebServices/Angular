/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2870Component } from './comp-2870.component';

describe('Comp2870Component', () => {
  let component: Comp2870Component;
  let fixture: ComponentFixture<Comp2870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
