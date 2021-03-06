/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp907Component } from './comp-907.component';

describe('Comp907Component', () => {
  let component: Comp907Component;
  let fixture: ComponentFixture<Comp907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
