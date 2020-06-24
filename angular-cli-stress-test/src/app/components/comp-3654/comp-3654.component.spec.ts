/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3654Component } from './comp-3654.component';

describe('Comp3654Component', () => {
  let component: Comp3654Component;
  let fixture: ComponentFixture<Comp3654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});