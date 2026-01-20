import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opendata } from './opendata';

describe('Opendata', () => {
  let component: Opendata;
  let fixture: ComponentFixture<Opendata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opendata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opendata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
