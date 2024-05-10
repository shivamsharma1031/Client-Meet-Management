import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { MeetComponent } from './meet/meet.component';
import { MeetingsScheduledComponent } from './meetings-scheduled/meetings-scheduled.component';
import { RegisteredClientsComponent } from './registered-clients/registered-clients.component';

const routes:Routes=[
  // {path:'',redirectTo:'/viewMeet',pathMatch:'full'},
  // {path:'viewMeet',component:HomeComponent},
  {path:'registerClient',component:ClientComponent},
  {path:'scheduleMeet',component:MeetComponent},
  {path:'allClients',component:RegisteredClientsComponent},
  {path:'allScheduledMeetings',component:MeetingsScheduledComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
