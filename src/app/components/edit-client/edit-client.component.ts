import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/Client';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
//properties for edit client
id:string;
client:Client = {
  firstName:'',
  lastName:'',
  email:'',
  balance:0
}
disableBalanceOnEdit:boolean = true;

  constructor(public clientService:ClientService,
              public router:Router,
              public route:ActivatedRoute,
              public flashMessagesService:FlashMessagesService, public settingsService:SettingsService) { }

  ngOnInit() {
    //get id
    this.id = this.route.snapshot.params['id'];
    //get client
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
    });
    //get settings from settings from services like the add-client
    this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;
  }
  onSubmit({value,valid}:{value:Client,valid:boolean}){
       if(!valid){
      this.flashMessagesService.show('Please Fill in all fields',{cssClass:'alert-danger',timeout:4000}); //toast message
      this.router.navigate(['edit-client'+this.id]); //redirect function
    }else{
      //update client
      this.clientService.updateClient(this.id, value);
      this.flashMessagesService.show('Client Updated',{cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/client/'+this.id]);
    }
//    console.log(value);
  }

}
