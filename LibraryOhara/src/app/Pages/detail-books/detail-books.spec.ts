import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBooks } from './detail-books';

describe('DetailBooks', () => {
  let component: DetailBooks;
  let fixture: ComponentFixture<DetailBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailBooks],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailBooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
