import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobhourComponent } from './jobhour.component';

describe('JobhourComponent', () => {
  let component: JobhourComponent;
  let fixture: ComponentFixture<JobhourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobhourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobhourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
