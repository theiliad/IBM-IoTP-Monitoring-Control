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

            for (let device of this.devices) {
                this.ibmIoTP.getLastCachedEvent(device.deviceId).then(
                  eventData => {
                    console.log("Event:", atob(eventData["payload"]));

                    device["data"] = JSON.parse(atob(eventData["payload"]))["d"];
                  }, error =>  this.errorMessage = <any>error);
            }
          }, error =>  this.errorMessage = <any>error);
  }
};