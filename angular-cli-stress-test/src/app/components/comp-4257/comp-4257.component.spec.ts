/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4257Component } from './comp-4257.component';

describe('Comp4257Component', () => {
  let component: Comp4257Component;
  let fixture: ComponentFixture<Comp4257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
