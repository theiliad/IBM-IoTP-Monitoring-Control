import { Component, OnInit }  from '@angular/core';
import { IBMIoTP }            from '../../services/iotp/ibmIoTP.service'

@Component({
  templateUrl: './devices.component.html',
})

export class DevicesComponent implements OnInit {
  errorMessage: string;
  devices;

  constructor (private ibmIoTP: IBMIoTP) {}

  ngOnInit() {
    this.ibmIoTP.getDevices().then(
          devices => {
            console.log("Devices:", devices);

            this.devices = devices["results"];
          },
          error =>  this.errorMessage = <any>error);
  }
};