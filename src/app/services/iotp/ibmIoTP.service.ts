import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IBMIoTPService {
    // https://docs.internetofthings.ibmcloud.com/swagger/v0002.html
    private deviceType: string  =   "iot-conveyor-belt";
    
    // Endpoint URLs
    private baseURL: string =           `/api`;
    private devicesURL: string =        `/device/types/${this.deviceType}/devices`;
    private statusURL: string =        `/service-status`;
    private lastCachedEventURL: string = `/device/types/${this.deviceType}/devices/{deviceId}/events/sensorData`

    constructor(private http: Http) {}

    getDevices(): Promise<Object> {
        let url = this.baseURL.concat(this.devicesURL);

        return this.http.get(url)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getStatus(): Promise<Object> {
        let url = this.baseURL.concat(this.statusURL);

        return this.http.get(url)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getLastCachedEvent(deviceID: string): Promise<Object> {
        let url = this.baseURL.concat(this.lastCachedEventURL.replace("{deviceId}", deviceID));

        return this.http.get(url)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}