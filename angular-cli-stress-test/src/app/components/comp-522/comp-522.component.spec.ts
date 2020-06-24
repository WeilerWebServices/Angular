/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp522Component } from './comp-522.component';

describe('Comp522Component', () => {
  let component: Comp522Component;
  let fixture: ComponentFixture<Comp522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
