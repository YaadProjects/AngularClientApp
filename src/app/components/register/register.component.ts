import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//properties
email:string;
password:string;

  constructor(private authService:AuthService,  private router:Router, private flashMessageService: FlashMessagesService) { }

  ngOnInit() {
  }
onSubmit(){
  this.authService.register(this.email, this.password)
  .then((res)=>{
    this.flashMessageService.show('New  user registered', {cssClass:'alert-success', timeout:4000});
    this.router.navigate(['/']);
  }).catch((err)=>{
    this.flashMessageService.show(err.message, {cssClass:'alert-success', timeout:4000});
    this.router.navigate(['/regiser']);
  });
}
}
