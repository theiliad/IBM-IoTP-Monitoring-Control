import { Component, OnInit }    from '@angular/core';
import { IBMIoTPService }       from '../../services/iotp/ibmIoTP.service';
import { LiveDataService }      from '../../services/livedata/liveData.service';

@Component({
  templateUrl: './devices.component.html',
})

export class DevicesComponent implements OnInit {
  // Devices List
  errorMessage: string;
  devices;
  
  // Live Data
  connection;
  messages = [];
  message;

  constructor (private ibmIoTP: IBMIoTPService, private liveDataService: LiveDataService) {}

  ngOnInit() {
    this.connection = this.liveDataService.getMessages().subscribe(message => {
      this.messages.push(message);
    });

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

  sendMessage() {
    this.liveDataService.sendMessage(this.message);
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
};