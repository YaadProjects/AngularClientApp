import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  //properties
  email:string;
  password:string;
  constructor(public afAuth: AngularFireAuth) { }

  //login user
  login(email, password){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email,password).then(userData => resolve(userData),
    err=>reject(err));
    });
  }

  //check user status
  getAuth(){
    return this.afAuth.authState.map(auth => auth); //in firebase docs returns observable with users data
  }

  //logout user
  logout(){
    this.afAuth.auth.signOut();
  }
  //register
  register(email, password){
    return new Promise((resolve, reject)=>{
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(userData => resolve(userData),
    err => reject(err));
    });
  }
}
