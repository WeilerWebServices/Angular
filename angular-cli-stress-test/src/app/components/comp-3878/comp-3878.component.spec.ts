/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3878Component } from './comp-3878.component';

describe('Comp3878Component', () => {
  let component: Comp3878Component;
  let fixture: ComponentFixture<Comp3878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
