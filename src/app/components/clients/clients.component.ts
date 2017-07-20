import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import {Client} from '../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:any[];
  totalOwed:number;
  constructor(public ClientService:ClientService) {
    
   }

  ngOnInit() {
    this.ClientService.getClients().subscribe(clients => {
      this.clients = clients;
      console.log(this.clients);
      this.getTotalOwed();
    });
  }
getTotalOwed(){
  let total = 0;
  for(let i=0; i<this.clients.length;i++){
    total += parseFloat(this.clients[i].balance); //parse to float
  }
  this.totalOwed = total;
  console.log(this.totalOwed);
}
}
