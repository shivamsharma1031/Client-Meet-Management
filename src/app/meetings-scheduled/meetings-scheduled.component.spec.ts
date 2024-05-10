import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsScheduledComponent } from './meetings-scheduled.component';

describe('MeetingsScheduledComponent', () => {
  let component: MeetingsScheduledComponent;
  let fixture: ComponentFixture<MeetingsScheduledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingsScheduledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetingsScheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
