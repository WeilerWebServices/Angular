/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1063Component } from './comp-1063.component';

describe('Comp1063Component', () => {
  let component: Comp1063Component;
  let fixture: ComponentFixture<Comp1063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
