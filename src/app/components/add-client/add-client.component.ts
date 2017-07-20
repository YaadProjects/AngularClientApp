import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import {SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client:Client={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  }

  disableBalanceOnAdd:boolean = false;

  constructor(public flashMessagesService:FlashMessagesService, public router:Router,
  public clientService:ClientService, public settingsService:SettingsService
  ) { 

   }

  ngOnInit() {
    //get this values from services/settings on function getSettings
    //and set the above boolean to that
    this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
    
  }
  onSubmit({value,valid}:{value:Client,valid:boolean}){
    if(this.disableBalanceOnAdd){
      value.balance = 0;
    }

    if(!valid){
      this.flashMessagesService.show('Please Fill in all fields',{cssClass:'alert-danger',timeout:4000}); //toast message
      this.router.navigate(['add-client']); //redirect function
    }else{
      //add new client
      this.clientService.newClient(value);
      this.flashMessagesService.show('Successfully Added',{cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/']);
    }
//    console.log(value);
  }
}
