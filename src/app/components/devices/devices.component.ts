import { Component, OnInit }    from '@angular/core';
import { IBMIoTPService }       from '../../services/iotp/ibmIoTP.service';
import { LiveDataService }      from '../../services/livedata/liveData.service';

// Carbon Design Framework
import { DataTable }            from 'carbon-components';
import { Checkbox }             from 'carbon-components';

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
  mqttStatus: boolean = false;

  constructor (private ibmIoTP: IBMIoTPService, private liveDataService: LiveDataService) {}

  ngOnInit() {
    this.connection = this.liveDataService.getMessages().subscribe(message => {
      this.messages.push(message);

      if (message["type"] === "new_sensorData") {
        console.log("TEXT", message["text"]);

        var payload     = JSON.parse(message["text"])["d"];
        const deviceId  = payload["id"];
        
        for (let device of this.devices) {
          if (device.deviceId === deviceId) {
            device["data"] = payload;
          }
        }
      } else if (message["type"] === "mqtt_status") {
        this.mqttStatus = message["text"].connected;
      }

      this.mqttStatusInquiry();
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

  mqttStatusInquiry() {
    this.liveDataService.sendMessage('mqtt_status_inquiry', {});
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