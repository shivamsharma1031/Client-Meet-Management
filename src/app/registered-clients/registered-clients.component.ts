import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registered-clients',
  templateUrl: './registered-clients.component.html',
  styleUrl: './registered-clients.component.css'
})
export class RegisteredClientsComponent implements OnInit {
  clients:any[]=[];
  message:string='';

  constructor(private http:HttpClient) { }

  //if a tyscript need to get executed by default some thing on a screen
  ngOnInit(): void {
    this.fetchClients();
  }


  fetchClients() {
    this.http.get('http://localhost:3110/getAllClients')
      .subscribe((response:any) => {this.clients=response},
        (error) => { console.error('error in fetching the Clients',error); });
  }


  deleteClient (id:number) {
    console.log("id value is " + id)
    if(confirm('Are you sure you want to delete this Client?')) {
      this.http.delete('http://localhost:3110/deleteClient/'+id)
        .subscribe((response:any) =>{ this.message=response.message; this.fetchClients();},
          (error)=>{console.error('error in deleting the client',error);});
    }
  }

}
