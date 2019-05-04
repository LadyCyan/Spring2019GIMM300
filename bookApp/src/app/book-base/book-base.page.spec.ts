import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBasePage } from './book-base.page';

describe('BookBasePage', () => {
  let component: BookBasePage;
  let fixture: ComponentFixture<BookBasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
