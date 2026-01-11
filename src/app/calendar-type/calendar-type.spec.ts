import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarType } from './calendar-type';

describe('CalendarType', () => {
  let component: CalendarType;
  let fixture: ComponentFixture<CalendarType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
