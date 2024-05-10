import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  cname:string='';
  mail:string='';
  address:string='';
  pwd:string='';
  pwd2:string='';
  message:string='';

  constructor( private http:HttpClient ) { 
  }

  register() {
    if (this.pwd !== this.pwd2) {
      this.message = "Passwords do not match!";
      return;
    }

    if (!this.validatePassword(this.pwd)) {
      this.message = "Password must be at least 8 characters and include a number and a symbol.";
      return;
    }

    if (!this.validateEmail(this.mail)) {
      this.message = "Please enter a valid email address.";
      return;
    }

    if (!this.validateName(this.cname)) {
      this.message = "Name should only contain alphabetic characters.";
      return;
    }

    const client = {
      cname:this.cname,
      mail:this.mail,
      address:this.address,
      pwd:this.pwd
    };
    this.http.post('http://localhost:3110/createClient', client)
      .subscribe((response:any)=>{this.message=response.message},
        (error)=>{console.error('error in registering the client', error);});
  }

  // Basic password complexity checker
  validatePassword(password: string): boolean {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return regex.test(password);
  }

  validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  validateName(name: string): boolean {
    const regex = /^[A-Za-z\s]+$/;  // Regex to match only letters and spaces
    return regex.test(name);
  }

  ngOnInit(): void { 
  }
}