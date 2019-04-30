import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPagePage } from './book-page.page';

describe('BookPagePage', () => {
  let component: BookPagePage;
  let fixture: ComponentFixture<BookPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
