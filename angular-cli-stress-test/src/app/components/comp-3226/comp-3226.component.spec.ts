/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3226Component } from './comp-3226.component';

describe('Comp3226Component', () => {
  let component: Comp3226Component;
  let fixture: ComponentFixture<Comp3226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
