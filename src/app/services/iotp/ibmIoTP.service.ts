import { Injectable } from '@angular/core';

@Injectable()
export class IBMIoTP {
    private apiKey: String;
    private apiToken: String;
    
    constructor(apiKey, apiToken) {
        this.apiKey     = apiKey;
        this.apiToken   = apiToken;
    }

    getDevices(): String {
        return "Test";
    }
}