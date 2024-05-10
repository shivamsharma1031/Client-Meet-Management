import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings-scheduled',
  templateUrl: './meetings-scheduled.component.html',
  styleUrl: './meetings-scheduled.component.css'
})
export class MeetingsScheduledComponent implements OnInit {
  meetings:any[]=[];
  message:string='';

  constructor(private http:HttpClient) { }

  //if a tyscript need to get executed by default some thing on a screen
  ngOnInit(): void {
    this.fetchMeetings();
  }


  fetchMeetings() {
    this.http.get('http://localhost:3110/getAllMeetings')
      .subscribe((response:any) => {this.meetings=response},
        (error) => { console.error('error in fetching the meetings',error); });
  }


  deleteMeet(id:number) {
    console.log("id value is " + id)
    if(confirm('Are you sure you want to delete this Meeting?')) {
      this.http.delete('http://localhost:3110/deleteMeet/'+id)
        .subscribe((response:any) =>{ this.message=response.message; this.fetchMeetings();},
          (error)=>{console.error('error in deleting the product',error);});
    }
  }

}
