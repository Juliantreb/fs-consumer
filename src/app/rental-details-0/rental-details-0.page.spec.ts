import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetails0Page } from './rental-details-0.page';

describe('RentalDetails0Page', () => {
  let component: RentalDetails0Page;
  let fixture: ComponentFixture<RentalDetails0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalDetails0Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDetails0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
