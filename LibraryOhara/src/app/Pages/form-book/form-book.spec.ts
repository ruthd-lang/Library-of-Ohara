import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBook } from './form-book';

describe('FormBook', () => {
  let component: FormBook;
  let fixture: ComponentFixture<FormBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBook],
    }).compileComponents();

    fixture = TestBed.createComponent(FormBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
