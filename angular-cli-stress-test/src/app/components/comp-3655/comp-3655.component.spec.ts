/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3655Component } from './comp-3655.component';

describe('Comp3655Component', () => {
  let component: Comp3655Component;
  let fixture: ComponentFixture<Comp3655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
