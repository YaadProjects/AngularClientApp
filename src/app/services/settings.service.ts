import { Injectable } from '@angular/core';
import {Settings } from '../models/settings';

@Injectable()
export class SettingsService {
  //set local values
settings:Settings = {
  allowRegistration:true,
  disableBalanceOnAdd:false,
  disableBalanceOnEdit:true

}
  constructor() { }
getSettings(){
  return this.settings;
  }
}
