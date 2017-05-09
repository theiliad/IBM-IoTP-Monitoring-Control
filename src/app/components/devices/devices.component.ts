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
  liveData = {};
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

            var index = 0;
            for (let device of this.devices) {
                this.ibmIoTP.getLastCachedEvent(device.deviceId).then(
                  eventData => {
                    console.log("Event:", atob(eventData["payload"]));

                    device["data"] = JSON.parse(atob(eventData["payload"]))["d"];
                  }, error =>  this.errorMessage = <any>error);
                
                if (index < 5) {
                  this.setLiveData(index, true);

                  index += 1;
                }
            }
          }, error =>  this.errorMessage = <any>error);
  }

  sendMessage() {
    this.liveDataService.sendMessage('new-data', this.message);
  }

  setLiveData(index, turnOn) {
    if (turnOn) {
      console.log("Turn ON Live Data for", this.devices[index].deviceId);

      this.liveData[index] = true;
    } else {
      console.log("Turn OFF Live Data for", this.devices[index].deviceId);

      this.liveData[index] = false;
    }

    const socketData = {
      deviceId: this.devices[index].deviceId,
      turnOn: this.liveData[index]
    };
    
    this.liveDataService.sendMessage('mqtt_set', JSON.stringify(socketData));
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
};