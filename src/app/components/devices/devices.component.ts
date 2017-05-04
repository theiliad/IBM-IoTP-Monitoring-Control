import { Component } from '@angular/core';
import { IBMIoTP } from '../../services/iotp/ibmIoTP.service'

@Component({
  template: `
    <h2>Devices</h2>
    <p>List of devices</p>`
})

export class DevicesComponent {
  constructor() {
    var ibmIoTP = new IBMIoTP("egwegew", "ew32f2f2e");
  }
};