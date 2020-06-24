/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2876Component } from './comp-2876.component';

describe('Comp2876Component', () => {
  let component: Comp2876Component;
  let fixture: ComponentFixture<Comp2876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
