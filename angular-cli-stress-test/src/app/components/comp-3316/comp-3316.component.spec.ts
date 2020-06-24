/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3316Component } from './comp-3316.component';

describe('Comp3316Component', () => {
  let component: Comp3316Component;
  let fixture: ComponentFixture<Comp3316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
