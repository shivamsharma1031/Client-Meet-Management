import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { MeetComponent } from './meet/meet.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MeetingsScheduledComponent } from './meetings-scheduled/meetings-scheduled.component';
import { RegisteredClientsComponent } from './registered-clients/registered-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    MeetComponent,
    MeetingsScheduledComponent,
    RegisteredClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }