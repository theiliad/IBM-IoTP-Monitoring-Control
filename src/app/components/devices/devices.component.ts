import { Component, OnInit }  from '@angular/core';
import { IBMIoTP }            from '../../services/iotp/ibmIoTP.service'

@Component({
  template: `
    <h2>Devices</h2>
    <p>List of devices</p>
    {{devices}}`
})

export class DevicesComponent implements OnInit {
  errorMessage: string;
  devices;

  constructor (private ibmIoTP: IBMIoTP) {}

  ngOnInit() {
    this.ibmIoTP.getDevices().then(
          devices => console.log(devices),
          error =>  this.errorMessage = <any>error);
  }
};