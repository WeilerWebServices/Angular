/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4492Component } from './comp-4492.component';

describe('Comp4492Component', () => {
  let component: Comp4492Component;
  let fixture: ComponentFixture<Comp4492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
