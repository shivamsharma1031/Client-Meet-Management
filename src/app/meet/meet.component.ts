import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrl: './meet.component.css'
})
export class MeetComponent implements OnInit {
  meetTopic:string = '';
  numOfPeople:number = 1;
  meetStartTime:string = '';
  message:string = '';
  submitted:boolean = false;


  constructor(private http:HttpClient, private route:ActivatedRoute, private router:Router) {}

  
  scheduleClientMeet() {
    this.submitted = true;
    
    if (!this.meetTopic.trim() || this.numOfPeople < 1 || !this.meetStartTime.trim()) {
      this.message = "Please fill all the fields correctly.";
      return;
    }

    const meet= {
      meetTopic: this.meetTopic,
      numOfPeople: this.numOfPeople,
      meetStartTime: this.meetStartTime
    };

    this.http.post('http://localhost:3110/scheduleMeet', meet)
      .subscribe({
        next: (response: any) => {
          this.message = response.message;
          this.router.navigate(['/allScheduledMeetings']);
        },
        error: (error) => {
          console.error('Error in scheduling the meet', error);
          this.message = 'Failed to schedule meeting.';
        }
      });
  }

  ngOnInit(): void {}


}
